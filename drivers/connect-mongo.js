const mongoose = require('mongoose');

const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}

mongoose.connect('mongodb://localhost:27017/employees', options)
    .then(()=>{
        console.log('Connect Success with MongoDB');
    });

module.exports = mongoose;

