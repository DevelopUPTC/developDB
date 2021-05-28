const Employee = require('../models/Employee');

const getEmployees = (req, res)=>{
    Employee.find({},(error,result)=>{
        if( error ){
            res.status(500).render('index',{
                state: "Error"
            })
        }
        return res.status(200).render('index',{title:"Página de Inicio",result});
    })
}

const newEmployee = (req,res)=>{
    return res.render('formEmployee',{title: "Agregar Empleado"});
}

const saveEmployee =  (req,res)=>{
    const {idEmployee, name, lastName,  dateBirthday, salary, gender } = req.body;

    const salaryAux = String(salary).replace(/\D/g,"");
    const genderAux = gender == "F" ? false : true;
    const employee = new Employee({idEmployee:idEmployee,name: name,
        lastName: lastName, dateBirthday: dateBirthday, salary:salaryAux,gender:genderAux});
    employee.save( (error, result ) =>{
        if(error){
            console.log(error.toString());
        }
        console.log(result);
    });
    return res.redirect('/');
}

const deleteEmployee = ( req, res)=>{
    console.log(req.params);
    const {idUser} = req.params;
    return res.status(200).json({id:idUser});
}

const updateEmployee = ( req, res )=>{

}

module.exports ={
    getEmployees,
    newEmployee,
    saveEmployee,
    deleteEmployee,
    updateEmployee
}
