// js (unico archivo) que tendra todas las rutas

const HelloWorldApi = require('./api/helloworld/index')
// Lo mismo para otras rutas
// const notes = require('.api/notes')

// Función flecha que recibe un avariable llamada app
// que va a recibir del otro archivo la aplicación de express
const myFunctions = (app) => {
    app.use(HelloWorldApi)
    // app.use(notes)
}

// Función que recibe la aplicación
module.exports = myFunctions