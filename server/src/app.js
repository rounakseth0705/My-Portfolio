import express from "express";
import "dotenv/config";
import mailRouter from "./route.js";

export const app = express();

app.use("/api", mailRouter);