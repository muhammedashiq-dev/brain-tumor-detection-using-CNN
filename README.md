# brain-tumor-detection-using-CNN
🚀 Project Overview

This project uses Convolutional Neural Networks (CNNs) to detect and classify brain tumors from MRI images.
The goal is to automate early detection and assist medical professionals by providing a fast and reliable prediction system.

The model classifies MRI images into:

Tumor

No Tumor

The system includes a Flask-based web interface that allows users to upload an MRI scan and receive predictions instantly.

🛠️ Tech Stack
Backend / ML

Python

TensorFlow / Keras

OpenCV

NumPy

Matplotlib

Scikit-learn

Web Framework

Flask (for serving the model)

Tools

Jupyter Notebook

VS Code / PyCharm

Git & GitHub

📊 Dataset

The dataset used contains MRI brain images classified into:

Tumor

Normal

You may use a similar dataset from Kaggle:
"Brain MRI Images for Brain Tumor Detection".

(Add your dataset link here once you upload it)

🧠 Model Architecture

The CNN model includes:

Convolution Layers

MaxPooling

Dropout

Flatten Layer

Dense Layers

Softmax / Sigmoid Output

This architecture ensures efficient feature extraction and reduces the risk of overfitting.

📈 Model Performance
Metric	Score
Accuracy	~96% (varies depending on dataset)
Loss	Low training & validation loss
Prediction Time	< 1 second

(Replace with actual metrics if you have them.)

💻 How to Run the Project
1. Clone the Repository
git clone https://github.com/your-username/brain-tumor-detection.git
cd brain-tumor-detection

2. Create Virtual Environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux

3. Install Dependencies
pip install -r requirements.txt

4. Run the Flask App
python app.py

5. Open in Browser
http://127.0.0.1:5000

🖼️ Web App Screenshots
<img width="512" height="840" alt="image" src="https://github.com/user-attachments/assets/bd26c273-6516-4c5d-ab2d-69d16d8afb82" />

<img width="516" height="478" alt="image" src="https://github.com/user-attachments/assets/98e53fe7-cf1e-4f7b-8511-e817aaed8a39" />

<img width="571" height="297" alt="image" src="https://github.com/user-attachments/assets/5673d552-f156-44be-94aa-ed51d4412454" />



Upload an MRI image → instantly get prediction.
