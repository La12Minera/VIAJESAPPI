/* RESUMEN: CREACIÓN DE API "RES" UTILIZANDO MONGOOSE, EXPRESS
(POSTMAN) Y CONECTANDOSE A UNA BASE DE DATOS DE MONGODB.
SE DESPLIEGA EN HEROKU Y VA A PERSISTIR POR COMPLETO TODA LA
INFORMACIÓN */

// index.js: Armado de la orquesta inicial

const express = require("express");

const morgan = require("morgan")

require ('dotenv'). config()

const routeConfig = require("./routes");

const connectDB = require("./conection");

const app = express();

app.use(express.json())  // Va a formatear el body en un objeto JS para que pueda funcionar
                                       //Resumen: convierte el body en un json

app.use(morgan('dev'))

connectDB();

routeConfig(app);

app.listen(8080, () => {
  console.log("Server has started 8080");
});

/* ACLARACIÓN IMPORTANTE: Para darle mas profesionalidad:
1- Instalar / npm i dotenv
2- Instalar / npm i morgan
3- Instalar y utilizar morgan aca (en el index)
4- Crear archivo .env
5- Agregar al script de package.json "start": "node index.js"
Con esto, voy a Heroku (conecto con git), desplegamos, con la diferencia que la ip
en mongo atlas, ya no seria la de "casa", sino la de Heroku. Sin embargo, como
Heroku no nos va a entregar una ip, nos queda utilizar una golbal que usan todos
0.0.0.0/0
 */
