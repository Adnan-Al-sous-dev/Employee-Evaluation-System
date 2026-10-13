import express from "express";
import userRouter from "./routers/userRouter.js";
// import { getUserController } from "./conrtrollers/UserController.js";
import cors from "cors";

const app = express();

app.use(express.json());

//مشان تخلي الباك اند يقدر يستقبل الريكوست من فرونت اند
// app.use(cors());
app.use(cors({
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
}))

app.use("/users", userRouter);

export default app;