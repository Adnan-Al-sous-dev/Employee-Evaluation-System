
// import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use("/users", userRouter);


import connectDB from "./config/mongoodb.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});