const {employees, validate, Employees} = require('../models/employees');

const getAllEmployees = async (req, res, next) => {
    const list = await Employees.find().exec();
    res.render('employees', {
        Employees: list
    });
}



const getAddEmployeesView = (req, res, next) => {
    res.render('addEmployees');
}

const addEmployees = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    const data = req.body;
    let employees = await new Employees({
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone
   
    });
    employees = await employees.save();
    res.redirect('/');
}
const getUpdateEmployeesView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const oneemployees = await Employees.findById(id).exec();
        res.render('updateEmployees', {
            employees: oneemployees
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateEmployees = async(req, res, next) => {
    const {error} = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);
    const id = req.params.id;
    const data = req.body;
    let employees = await Employees.findByIdAndUpdate(id, {
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone
    }, {new: true});
    if(!employees) return res.status(404).send('not found');

    res.redirect('/');
}

const getDeleteEmployeesView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const oneemployees = await Employees.findById(id).exec();
        res.render('deleteEployees', {
            employees: oneemployees
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const deleteEmployees = async (req, res, next) => {
    try {
        const id = req.params.id;
        const employees = await Employees.findByIdAndRemove(id);
        if(!employees) return res.status(404).send('not found');
        res.redirect('/');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllEmployees,
    getAddEmployeesView,
    addEmployees,
    getUpdateEmployeesView,
    updateEmployees,
    getDeleteEmployeesView,
    deleteEmployees
}


