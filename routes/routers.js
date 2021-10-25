const express = require("express");
const {
    getAllEmployees,
    getAddEmployeesView,
    addEmployees,
    getUpdateEmployeesView,
    updateEmployees,
    getDeleteEmployeesView,
    deleteEmployees
} = require("../controllers/Controller");

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/addEmployees", getAddEmployeesView);
router.post("/addEmployees", addEmployees);
router.get("/updateEmployees/:id", getUpdateEmployeesView);
router.post("/updateEmployees/:id", updateEmployees);
router.get("/deleteEmployees/:id", getDeleteEmployeesView);
router.post("/deleteEmployees/:id", deleteEmployees);

module.exports = {
  routes: router,
};
