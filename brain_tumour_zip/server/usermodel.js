const { mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: String,
  email: String,
  name: String,
  age: Number,
  gender: String,
  brainTumorPredictionHistory: [
    {
      date: { type: Date },
      time: { type: String },
      prediction: {
        positive: { type: Boolean },
        stage: { type: String }
      },
      scanUrl: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
