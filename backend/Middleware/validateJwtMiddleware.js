import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Pasijemam secret key ir ji naudojame sign ir patvirtinti jwts
const secretKey = process.env.SECRET_KEY; 


export async function validateJwt(req, res, next) {
  // Pasijamame is header auth is req
  const { authorization } = req.headers; 

  try {
    // Splitting the Authorization header to get the token part (assuming format is "Bearer <token>")
    const token = authorization.split(" ")[1];

    // Verifying the JWT using the secret key
    const decoded = jwt.verify(token, secretKey);

    next();
  } catch (error) {
    res.status(403).json({ error: "Unauthorized" });
  };
};
