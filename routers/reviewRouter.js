import { Router } from "express";
import {
    createNewReviewController,
    deleteReviewById,
    findReviewById,
    getReviewController,
    updateReviewById
} from "../conrtrollers/reviewsControoller.js";

const reviewRouter = Router();

reviewRouter.route("/employees/:employeeId")
    .get(getReviewController)
    .post(createNewReviewController);

reviewRouter.route("/:id")
    .get(findReviewById)
    .put(updateReviewById)
    .delete(deleteReviewById);

export default reviewRouter;