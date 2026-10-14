import { Router } from "express";
import {
    createNewReviewController,
    deleteReviewById,
    findReviewById,
    getReviewController,
    updateReviewById
} from "../conrtrollers/reviewsControoller.js";

const reviewRouter = Router();

reviewRouter.route("/employees/:employeeId/reviews")
    .get(getReviewController)          
    .post(createNewReviewController);   

reviewRouter.route("/reviews/:id")
    .get(findReviewById)                
    .put(updateReviewById)             
    .delete(deleteReviewById);          

export default reviewRouter;