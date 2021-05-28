const {Router} = require('express');
const controller = require('../controllers/controller');

const route = new Router();

route.get('/', controller.getEmployees);
route.get('/newEmployee',controller.newEmployee );
route.post('/newEmployee',controller.saveEmployee );
route.delete('/delEmployee/:id',controller.deleteEmployee);

module.exports = route;
