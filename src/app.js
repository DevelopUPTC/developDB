const express = require('express');
const path = require('path')
//const bodyParser = require('body-parser')

require('../drivers/connect-mongo');

const app = express();

//settings
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

//Routing
app.use('/',require('../routes/index') );

module.exports = app;
