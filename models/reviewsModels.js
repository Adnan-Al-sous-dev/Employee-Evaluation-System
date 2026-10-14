
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    month: { type: String, required: true }, 
    rating: { type: Number, required: true, min: 1, max: 5 }, 
    notes: { type: String },
    evaluatorName: { type: String, required: true }
});

export default mongoose.model('Review', reviewSchema);