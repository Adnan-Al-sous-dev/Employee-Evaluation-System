import Review from "../models/reviewsModels.js";

export const getReviewController = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const reviews = await Review.find({ employeeId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createNewReviewController = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { month, rating, notes, evaluatorName } = req.body;

        const existingReview = await Review.findOne({ employeeId, month });
        if (existingReview) {
            return res.status(400).json({ message: "A review for this employee in this month already exists." });
        }

        const newReview = new Review({ employeeId, month, rating, notes, evaluatorName });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const findReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: " review not found " });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateReviewById = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteReviewById = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: "deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};