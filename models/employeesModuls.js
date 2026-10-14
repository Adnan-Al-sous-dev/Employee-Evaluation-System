
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    hireDate: { type: Date, required: true },
    salary: { type: Number, required: true }
});

employeeSchema.virtual('serviceDuration').get(function () {
    if (!this.hireDate) return '';
    const currentDate = new Date();
    const hireDate = new Date(this.hireDate);
    let years = currentDate.getFullYear() - hireDate.getFullYear();
    let months = currentDate.getMonth() - hireDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    return `${years} years and ${months} months`;
});

employeeSchema.set('toJSON', { virtuals: true });
employeeSchema.set('toObject', { virtuals: true });

export default mongoose.model('Employee', employeeSchema);