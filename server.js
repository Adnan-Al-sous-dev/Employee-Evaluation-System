import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoodb.js";
import employeeRoutes from "./routers/employeesRputers.js";
import reviewRoutes from "./routers/reviewsRputers.js";

dotenv.config();
const app = express();

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", employeeRoutes);
app.use("/", reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});