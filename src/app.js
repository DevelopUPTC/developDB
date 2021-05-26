const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

require('../drivers/connect-db-colombia');

const app = express();

//settings
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routing
app.use('/',require('./../routes/index') );
app.use('/api/colombia',require('./../routes/colombia'));

app.listen(app.get('port'),() => console.log(`Server at Port ${app.get('port')}`));

//module.exports = app;
