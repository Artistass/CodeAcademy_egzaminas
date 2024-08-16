import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export async function validateJwt(req, res, next) {
  const { authorization } = req.headers;

  try {
    const decoded = jwt.verify(authorization.split(" ")[1], secretKey);
    next();
  } catch (error) {
    res.status(403).json({ error: "Unauthorized" });
  };
};