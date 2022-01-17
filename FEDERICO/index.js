const { request, response } = require('express')
const express = require('express')
//const cors = require('cors')
// const morgan = require('morgan') // Morgan es un logger que recibe unos tipos de estilos para mostrar los look de inform.
//                Dichos look serian: Ej. POST/api/notes 201 2.595 ms - 95
const app = express()
app.use(express.json())  // controlador express.json que tome y convierte los datos json de una solicitud
                         // en objetos JS y luego los adjunta en la propiedad body del objeto req
// app.use(morgan('dev')) // Se usa en toda la aplicación. El 'dev' devuelve lo correcto en verde, mal en rojo, etc. (Es el mas utilizado "modo desarrollo")
//                           Cuando se usan token de morgan no se utiliza con dev, sino de la siguiente forma:

// Morgan, permite crear token:
// morgan.token('myTokenBody', (req) => {
    // return JSON.stringify(req.body)
// })

// 1- morgan. token = recibe el nombre que vamos a crear ('myTokenBody')
// 2- 'myTokenBody' =  Se ve reflejado en la "app.use". Cuando llamen a mi 'myTokenBody' vayan y busquen los token personalizados que se hicieron y ejecutenlo.
// 3- ¿Que se ejecuta? = una funcion middleware.
// 4- funcion middleware = recibe un req y retorne un objeto JSON en un texto (JSON.stringify) e imprima el req.body.
// 5- req.body = Es lo que llega cuando se hace un POST o PUT
// 6- guardar e ir a POSTMAN: Al realizar un GET (http://localhost:3001/api/notes/1), luego en cmder: 
        // GET /api/notes/1 404 - {"id":10,"content":"HTML is easy","date":"209","important":true} - 1.479 ms
// 7- en POSTMAN al hacer un POST/body (http://localhost:3001/api/notes): en cmder:
        // [ { id: 10, content: 'HTML is easy', date: '209', important: true } ]
        // POST /api/notes 201 - {"id":10,"content":"HTML is easy","date":"209","important":true} - 9.618 ms
// 8- // No se utiliza tanto en producción por temas de leyes 

//app.use(
    // morgan(
       // ':method :url :status :res[content-lenght] :myTokenBody - :response-time ms'
    // )
// )
//morgan con configuración: muestra el metodo, url, status, contenido en caracteres tiene la respuesta, tiempo de demora en ms.
// Ej: GET en POSTMAN (http://localhost:3001/api/notes/1) - Params - SEND
//  En cmder al guardar corre: GET /api/notes/1 404 - - 3.068 ms 

// En el caso del body, van a llegar parametros para el POST/PUT cuando se van a guardar, y se quiere saber que llega
// para poder determinar si fue un error de mi parte o el usuario envio cosas que no eran.
// No se utiliza tanto en producción por temas de leyes 

//app.use(cors())
const notes = []

// Home
app.get('/', (request, response) => {
    response.send('<h1>Hello World</h2>')
})

// GET NOTES
app.get('/api/notes', (req, resp) => {
    resp.json(notes)
})

//GET NOTES/ID
app.get('/api/notes/:id', (req, resp) => {
    const {id} = req.params  //params: recibe los parametros que le mandamos a la api (Permite agarrar valores de todo lo que viene en :)
    const note = notes.find(item => item.id === Number(id))
    if (note) {
        resp.json(note)
    }else {
        resp.status(404).end()
    }
})


//DELETE NOTES
app.delete('/api/notes/:id', (req, resp) => {
    const {id} = req.params  
    const resultNotes = notes.filter(item => item.id !== Number(id))
    console.log(resultNotes)
    resp.status(204).end()
})



//POST NOTES
app.post('/api/notes/', (req, resp) => {
    const newNote = req.body
    const resultNotes = notes.concat(newNote)
    console.log(resultNotes)
    resp.status(201).json(newNote)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
