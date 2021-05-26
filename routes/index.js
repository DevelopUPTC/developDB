const {Router} = require('express');

const route = new Router();

route.get('/',(req,res)=>{
    res.render('index',{title:"Página de Inicio"});
});

module.exports = route;
