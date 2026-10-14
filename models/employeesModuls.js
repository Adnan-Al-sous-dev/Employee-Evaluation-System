
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        department: {
            type: String,
            required: true,
            trim: true,
        },

        hireDate: {
            type: Date,
            required: true,
        },

        salary: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

employeeSchema.virtual("serviceDuration").get(function () {
    if (!this.hireDate) {
        return "";
    }

    const today = new Date();
    const hireDate = new Date(this.hireDate);

    let years =
        today.getFullYear() -
        hireDate.getFullYear();

    let months =    
        today.getMonth() -
        hireDate.getMonth();

    if (
        months < 0 ||
        (months === 0 &&
            today.getDate() < hireDate.getDate())
    ) {
        years--;
        months += 12;
    }

    return `${years} سنة و ${months} شهر`;
});

employeeSchema.set("toJSON", {
    virtuals: true,
});

employeeSchema.set("toObject", {
    virtuals: true,
});

export default mongoose.model(
    "Employee",
    employeeSchema
);

// bookingSchema.index({ eventDate: 1, roomNumber: 1 }, { unique: true });