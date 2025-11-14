from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model 
from PIL import Image, ImageOps 
import numpy as np
from io import BytesIO
import os
import warnings
import logging


app = Flask(__name__)
CORS(app)

np.set_printoptions(suppress=True)
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2" 
warnings.filterwarnings("ignore", category=UserWarning, module="keras")
logging.basicConfig(level=logging.DEBUG)

def load_binary_model():
    try:
        binary_model = load_model("api/models/binary_model/binary_model.h5", compile=False)
        binary_class_names = open("api/models/binary_model/binary_label.txt", "r").readlines()
        return binary_model, binary_class_names
    except Exception as e:
        logging.debug(e)
        return None, None
    
def load_stage_model():
    try:
        stage_model = load_model("api/models/stage_model/stage_model.h5", compile=False)
        stage_class_names = open("api/models/stage_model/stage_label.txt", "r").readlines()
        return stage_model, stage_class_names
    except Exception as e:
        logging.debug(e)
        return None, None

def image_preprocess(image):
    try:
        data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
        image = Image.open(BytesIO(image)).convert("RGB")
        size = (224, 224)
        image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
        image_array = np.asarray(image)
        normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
        data[0] = normalized_image_array
        return data
    except Exception as e:
        logging.debug(e)
        return None

def cancer_prediction(image):
    try:
        binary_model, binary_class_names = load_binary_model()
        data = image_preprocess(image)
        prediction = binary_model.predict(data)
        index = np.argmax(prediction)
        class_name = binary_class_names[index]
        confidence_score = prediction[0][index]
        logging.debug("Class: %s, Confidence Score: %s", class_name[2:], confidence_score)
        return class_name[2:], float(confidence_score)
    except Exception as e:
        logging.debug(e)
        return None, None

def cancer_stage_prediction(image):
    try:
        stage_model, stage_class_names = load_stage_model()
        data = image_preprocess(image)
        prediction = stage_model.predict(data)
        index = np.argmax(prediction)
        class_name = stage_class_names[index]
        confidence_score = prediction[0][index]
        logging.debug("Class: %s, Confidence Score: %s", class_name[2:], confidence_score)
        return class_name[2:], float(confidence_score)
    except Exception as e:
        logging.debug(e)
        return None, None
    
@app.route('/', methods=['GET'])
def home():
    return 'Welcome to the brain tumor prdection Service!'

@app.route('/api/predict', methods=['POST'])
def make_prediction():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        image = file.read()
        result, score = cancer_prediction(image)
        logging.debug('result: %s', result)
        if result is None:
            return jsonify({'error': 'Prediction failed'}), 500
        if result.strip() == 'Non-Tumorous':
            return jsonify({'result': result, 'score': float(score)}), 200
        else:
            stage_result, stage_score = cancer_stage_prediction(image)
            if stage_result is None:
                return jsonify({'error': 'Prediction failed'}), 500
            return jsonify({'result': result, 'score': float(score),'stage_result': stage_result, 'stage_score': float(stage_score)}), 200
    except Exception as e:
        logging.debug(e)
        return jsonify(''), 500


if __name__ == "__main__":
    app.run(debug=True)

