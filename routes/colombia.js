const {Router} = require('express');
const Department = require('./../models/Department');
const Town = require('./../models/Town');

const router = new Router();

router.get('/departments',(req,res) =>{
    Department.find({},(error,departmemnts)=>{
        if(error){
            return res.status(505).send({
                status: "Error",
                message: "Error al Traer los Datos"
            });
        }else if( !departmemnts ){
            return res.status(200).send({
                status: "Success",
                message: "No hay Datos que Traer"
            });
        }
        return res.status(200).send({
            status: "Success",
            departmemnts
        });
    });
});

router.get('/towns',(req,res)=>{
    Town.find({},(error,towns)=>{
        if(error){
            return res.status(505).send({
                status: "Error",
                message: "Error al Traer los Datos"
            });
        }else if( !towns ){
            return res.status(200).send({
                status: "Success",
                message: "No hay Datos que Traer"
            });
        }
        return res.status(200).send({
            status: "Success",
            towns
        });
    });
});

router.get('/towns/:code',(req,res)=>{
   const {code} = req.params;
       Town.find({department:code},(error, towns )=>{
           if( error ){
               return res.status(505).send({
                   status: "Error",
                   message: "Error en la Base de Datos"
               });
           }else if( !towns ){
               return res.status(200).send({
                   status: "Success",
                   message: "Error en la Colleción"
               });
           }
           return res.status(200).send({
               status: "Success",
               towns
           });
       });
});

module.exports = router;
