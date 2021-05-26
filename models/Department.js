const mongoose = require('mongoose');

const {Schema} = mongoose;

const DepartmentSchema = new Schema({
    code: String,
    name: String
});

const department = mongoose.model('department',DepartmentSchema);

module.exports = department;
