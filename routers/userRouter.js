import { Router } from "express";
import { createNewUserController, deleteUSerById, findUSerById, getUserController, updateUSerById } from "../conrtrollers/UserController.js";

const userRouter = Router();


userRouter.route("/").get(getUserController).post(createNewUserController);
userRouter.route("/:id").get(findUSerById).delete(deleteUSerById).put(updateUSerById);


export default userRouter;
// userRouter.get("/", getUserController);
// userRouter.get("/:id", findUSerById);
// userRouter.post("/", createNewUserController);
// userRouter.delete("/:id", deleteUSerById);
// userRouter.put("/:id", updateUSerById);

// router.get("/home", (req, res) => {
//     res.render("home", { title: "My EJS Page", name: "John Doe" });
// });


// router.get("/try", (req, res) => {
//     res.send("<a href='/download'>Download File</a>");
// });
// router.get("/json", (req, res) => {
//     res.json({ message: "hello from the server  5ODDE HEE  " });
// });

// router.get("/sendFile", (req, res) => {
//     const filePath = path.join(__dirname, "public", "name.html");
//     res.sendFile(filePath);
// });
// router.get("/download", (req, res) => {
//     const filePath = path.join(__dirname, "public", "lool.docx");
//     res.sendFile(filePath);
// });

