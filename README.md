



# Desarrollo web con Bases de Datos

Proyecto que implementa una aplicación web dinámica, persistiendo los objetos en una base de datos local usando MongoDB.

## Herramientas de Desarrollo

- NodeJS
- Express
- MongoDB con Mongoose para conectar con la base de datos

### Instalación de Mongoose

```bash
npm install mongoose
```
### Conectando MongoDB con Node

Para la conexión a la base de datos se usará [`mongoose`](https://mongoosejs.com/), que es una biblioteca JS que permite definir esquemas con datos fuertemente tipados. Una vez que se define el Esquema, a partir de él se crean modelos de datos que se pueden persistir en MongoDB.

Para realizar la conexión a un servidor local de MongoDB, se implementa el siguiente código en un archivo `drivers/connect-mongo.js`

```javascript
const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/employees";

const db = mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Connect Success with MongoDB');
    });

module.exports = mongoose;
```

Se requiere el módulo correspondiente, luego se define el string de conexión que incluye la máquina o host en donde está instalado el servicio de la base de datos, para este ejemplo está a nivel local. Al final se especifica el nombre de la base de datos con la cual se va a conectar, que en este caso es `employees`, no es necesario que la base de datos exista. La función `connect()` de `mongoose` permite establecer la conexión, recibe el string de conexión se pueden especificar opciones:

- __useNewUrlParser__. Permite que los usuarios recurran al analizador anterior si encuentran un error en el nuevo analizador de cadenas de conexión. Tenga en cuenta que si especifica useNewUrlParser: true, debe especificar un puerto en su cadena de conexión, como mongodb: // localhost: 27017 / dbname. El nuevo analizador de URL no admite cadenas de conexión que no tengan un puerto, como mongodb: // localhost / dbname.
- __useUnifiedTopology__. Falso por defecto. Configúrelo en true para optar por usar el nuevo motor de administración de conexiones del controlador MongoDB. Debe establecer esta opción en verdadero, excepto en el caso poco probable de que le impida mantener una conexión estable.

En el archivo de la aplicación establecer la conexión con la siguiente línea.

```javascript
const mongoose = require('mongoose');
```

Si todo va bien, en la consola del servidor debe mostrar el mensaje testeo.

### Definiendo Modelos

En el directorio del proyecto se crea una carpeta `models` que contendrá la definición de los Modelos de datos a partir de los Esquemas de `mongoose`. Se va a crear un modelo para `Employee`. Entonces dentro de la carpeta escribir el código dentro de un archivo `Employee.js`

```javascript
const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    idEmployee :{
        type: String,
        required: true
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
```

Los modelos son creados a través de la interfaz `Schema`. Un esquema representa la estructura de cada documento en la colección.

Se acceder a la base de datos a través de `mongoose.model`. El primer argumento es el nombre en singular del modelo, mongoose mapea en forma automática el nombre a plural. Entonces se creará una colección `emplpyees` en la base de datos. El segundo parámetro es la variable que especifica la estructura del modelo especificada anteriormente.
