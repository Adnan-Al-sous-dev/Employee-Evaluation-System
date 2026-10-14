import express from "express";
import cors from "cors";
import employeeRouter from "./routers/employeesRouters.js";
import reviewRouter from "./routers/reviewRouter.js";

const app = express();

app.use(express.json());
app.use(
    cors({
        exposedHeaders: ["Content-Range", "X-Content-Range"],
    })
);

app.use("/employees", employeeRouter);
app.use("/reviews", reviewRouter);

export default app;