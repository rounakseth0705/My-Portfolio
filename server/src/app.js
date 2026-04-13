import express from "express";
import "dotenv/config";
import cors from "cors";
import mailRouter from "./route.js";

export const app = express();

app.use(cors({ origin: ["http://localhost:5173","https://my-portfolio-lzkv.onrender.com"], credentials: true }));
app.use(express.json());
app.use("/api", mailRouter);