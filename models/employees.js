const mongoose = require('mongoose');
const Joi = require('joi');

const EmployeesSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minlength: 11,
        required: true
    }
 
});

const Employees = mongoose.model('employees', EmployeesSchema);

const validateEmployees = (employees) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required(),
        address: Joi.string().required(),
        phone: Joi.string().min(11).required()
 
    }

    return Joi.validate(employees, schema);
}


module.exports.Employees = Employees;
module.exports.validate = validateEmployees;