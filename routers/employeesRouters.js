import { Router } from "express";

import {
    createNewEmployeeController,
    deleteEmployeeController,
    findEmployeeByIdController,
    getEmployeesController,
    updateEmployeeSalaryController,
} from "../conrtrollers/employeesControoller.js";

const employeeRouter = Router();

employeeRouter
    .route("/")
    .get(getEmployeesController)
    .post(createNewEmployeeController);

employeeRouter
    .route("/:id")
    .get(findEmployeeByIdController)
    .put(updateEmployeeSalaryController)
    .delete(deleteEmployeeController);

export default employeeRouter;