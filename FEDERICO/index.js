const { request, response } = require('express')
const express = require('express')
const cors = require('cors')

// importar archivo routes
const routesConfig = require('./routes')
// cuando ejecute esta funcion tengo que pasar como parametro la variable (routesConfig)


const app = express() 
app.use(express.json())  


app.use(cors())

// Le paso app
routesConfig(app)

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
