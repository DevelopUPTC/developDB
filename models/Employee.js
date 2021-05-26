const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    idEmployee :{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    gender:{
        type: Boolean,
        required: true
    },
    dateBirthday:{
        type: Date,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});

const employee = mongoose.model('employee',EmployeeSchema);

module.exports = employee;
