const { request, response } = require('express')
const express = require('express')
const{requestLogger} = require('./Ej-Middlewares-compl1')
const app = express()
app.use(express.json())

const notes = []

// ejemplo 1: Home
app.get('/', requestLogger, (request, response) => {  // 1ro se ejecute el requestLogger (La tarea asignada en el Ej-Middlewares-compl1.js) y despues al decir next(), ejecutara el siguiente mensaje del actual js.
    response.send('<h1>Hello World</h2>')
})


// ejemplo 2
const func = (request, response, next) => {
    response.send('<h1>Hello World</h2>')
    next()
}

app.get('/', func, requestLogger, (req, res, next) => {   // Cuando llame, primero va al metodo GET (Postman) y va a traer el dato. Va a traer el metodo get y va a hacer el midd.
    console.log('Hola')
})
