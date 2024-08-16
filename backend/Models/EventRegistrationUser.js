import mongoose from "mongoose";

const eventRegistrationUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 20
  },
  lastName: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  age: {
    type: Number,
    require: true
  }
});

export default mongoose.model("EventRegistration", eventRegistrationUserSchema);