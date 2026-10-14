import Employee from "../models/employeesModuls.js";
import Review from "../models/reviewsModels.js";

const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
        return 0;
    }

    let sum = 0;

    for (const review of reviews) {
        sum += review.rating;
    }

    return Number(
        (sum / reviews.length).toFixed(1)
    );
};

export const getEmployeesController = async (
    req,
    res
) => {
    try {
        const employees = await Employee.find();

        const result = await Promise.all(
            employees.map(async (employee) => {
                const reviews = await Review.find({
                    employeeId: employee._id,
                });

                return {
                    ...employee.toObject(),
                    averageRating:
                        calculateAverageRating(reviews),
                };
            })
        );

        res.json(result);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

export const findEmployeeByIdController = async (
    req,
    res
) => {
    try {
        const employee = await Employee.findById(
            req.params.id
        );

        if (!employee) {
            return res.status(404).json({
                error: "الموظف غير موجود",
            });
        }

        const reviews = await Review.find({
            employeeId: employee._id,
        });

        res.json({
            ...employee.toObject(),
            averageRating:
                calculateAverageRating(reviews),
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

export const createNewEmployeeController = async (
    req,
    res
) => {
    try {
        const {
            name,
            department,
            salary,
            hireDate,
        } = req.body;

        const newEmployee = await Employee.create({
            name,
            department,
            salary,
            hireDate,
        });

        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

export const updateEmployeeSalaryController = async (
    req,
    res
) => {
    try {
        const updatedEmployee =
            await Employee.findByIdAndUpdate(
                req.params.id,
                {
                    salary: req.body.salary,
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        if (!updatedEmployee) {
            return res.status(404).json({
                error: "الموظف غير موجود",
            });
        }

        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

export const deleteEmployeeController = async (
    req,
    res
) => {
    try {
        const employeeId = req.params.id;

        const employee = await Employee.findById(
            employeeId
        );

        if (!employee) {
            return res.status(404).json({
                error: "الموظف غير موجود",
            });
        }

        const hasReviews = await Review.exists({
            employeeId: employee._id,
        });

        if (hasReviews) {
            return res.status(400).json({
                error:
                    "لا يمكن حذف الموظف لأنه لديه تقييمات",
            });
        }

        await Employee.findByIdAndDelete(employeeId);

        res.json({
            message: "تم حذف الموظف بنجاح",
            employee,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};