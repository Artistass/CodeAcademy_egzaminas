import SignUpUser from "../Models/SignUpUser.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export async function registerNewUser(req, res) {
  const { name, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newSignUpUser = new SignUpUser({
    name,
    password: hashedPassword
  });

  await newSignUpUser.save();
  res.json(newSignUpUser);
};

 export async function loginUser(req, res) {
  const { name, password } = req.body;

  const user = await SignUpUser.findOne({ name });

  if (!user) {
    return res.status(404).json({ err: "User not found" });
  };

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    const token = jwt.sign({ id: user._id, name: user.name }, secretKey, { expiresIn: "1h" });
    res.json({ token })
  } else {
    res.status(400).json({ message: "Password incorrect" });
  }
  
};