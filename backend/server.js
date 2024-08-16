import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Routes/indexRouter.js"

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, { dbName: "CodeAcademy_Egzaminas" })
.then(() => console.log("Connected to DB"))
.catch(() => console.log("Failed to connect"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () =>console.log(`App is listening on PORT ${PORT}`));
