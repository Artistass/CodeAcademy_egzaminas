import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 20
  },
  password: {
    type: String,
    require: true,
    minlength: 8
  }
})

export default mongoose.model("SignUp", signUpSchema);