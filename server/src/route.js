import express from "express";

const mailRouter = express.Router();

mailRouter.post("/send-mail");

export default mailRouter;