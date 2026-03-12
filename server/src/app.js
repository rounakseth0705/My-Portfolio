import express from "express";
import "dotenv/config";
import cors from "cors";
import mailRouter from "./route.js";

export const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api", mailRouter);