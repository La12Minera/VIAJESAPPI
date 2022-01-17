                        URL
1- Creo un nuevo proyecto // mkdir notes 
2- Inicializar git // git init // rama master
3- Crear un proyecto nodejs para tener acceso a paquetes y demas // npm init -y // valores por defecto (-y)
4- Crear un servidor. Se necesitaran los paquetes/librerias para el servidor, de express y nodemon.
5- npm i express // Instalo la libreria
6- .gitignore // Se crea el archivo con el fin de evitar que se se exporte node_ modules a la hora de subir el proyecto (seria muy pesado).
                Dentro de .gitignore: node_modules
7- En producción creo una tarea "start" y quiero que esa tarea corra node y cree un archivo index.js.
                "start": "node index.js"
                Creo en la carpeta de notes un archivo index.js
8- npm i nodemon -D  //  En desarrollo creo una dependencia que me recargue el servidor automáticamente cada vez que realizo algun cambio. 
9- Creo una tarea que se llame "dev" y quiero que ejecute el mismo index.js pero ahora que sea con nodemon.
                "dev": "nodemon index.js"
    SERVIDOR
10- Crear el servidor en el archivo index.js.
    a- Importar express (Lo trae desde node modules) // const express = require(express)
11- Inicializamos un servidor en express (que sea una función y se inicialice
* Resumen hasta el momento: Hacer un servidor que lea un puerto, el cual va a permitir ejecutar ciertas cosas y a suvez hacer rutas para resolver distintas tareas
12- La app va a escuchar en un puerto (PORT) que ademas cuando termine (=>) imprima un mensaje (`Server running.....`)
    Con esto se supone que tengo un servidor.
                const express = require('express')
                const app = express()
                const PORT = 3001
                app.listen(PORT, () => {
                    console.log(`Server running on http://localhost:${PORT}`)
                })
13- npm run dev // Pruebo a hago correr el servidor levantando la tarea de desarrollo (dev).
    RUTAS
14- Se puede acceder a las rutas a traves de "get", asignandoles una ruta; raiz de la api ('/'), su correspondiente request y response y, el envio del mensaje en cuestión a traves de un response.
                app.get('/', (request, response) => {
                    response.send('<h1>Hello World</h2>')
                })
15) Crear rutas que accedan a los recursos (Todos lo recursos van en plural "Ej. notes")
    Ejemplo:
        Cuando vaya a la ruta '/api/notes', realizar tal cosa. Entonces, recibe un req y un resp y quiero que el resp ya no me devuelva un texto sino, un json ya que este es el formato mas comun de intercambio de información entre aplicaciones. Devuelve por ejemplo "notes".
                const notes = []
                app.get('/api/notes', (req, resp) => {
                    resp.json(notes)
                })
16) Se puede solicitar una unica "notes", ya sea eliminar (DELETE), actualizar (PUT/PATCH) o leer (GET). Podemos definir parámetros de les rutas en express usando la sintaxis de los dos puntos, es decir se tiene la ruta normal, pero se necesita crear otra ruta que maneje unicamente las "notas" para un id en particular.
    - Se puede acceder a traves del objeto request.
    - Al colocar dos puntos, va a comenzar a recibir parametros "id"
    - Se imprime lo que llega al request 
Despues del parametro que va en la url, es decir despues de node, se colocara cualquier valor y dicho valor, se vera reflejado en cmder, seguida del nombre asignado en la app de studio code, ej:
        app.get('/api/notes/:id', (req, resp) => {
            console.log(req.params)
        })
    En la URL: http://localhost:3001/api/notes/2
    en cmder: Server running on http://localhost:3001
                { id: '2' }
17) Los arreglos tienen una función que permite encontrar un valor que coincida con lo que se tiene en el arreglo. El "find" encuentra siempre el primer valor.
    -find = Tiene 2 parametros (El valor y el indice/posición del elemento) y devuelve una función (el elemento que cumple con una determinada condición)
18) A su vez, es necesario determinar que pasaria en caso de que no se pueda devolver el elemento, esto es, agregar un falso (404) a la función en caso de que no se cumpla con el verdadero. Devemos especificarle a la aplicación el satatus del error.
19) Probar Delete: Eliminar elementos a traves de Postman. Primero se arma la función en el código (es similar a la de get). LA respuesta para este caso es "204".
        Una vez realizado el codigo, recargo la url con el elemento que quiero eliminar, copio dicha url y la pego en Postman.
20) POST: Es similar al get y al momento de cargarlo a Postman (con el codigo ya armado), es necesario dirigirse al Body y raw y JSON (Estamos haciendo una api que se va a comunicar entre aplicaciones)
    - Se realiza el codigo. Los objetos JSON se representan entre comillas a diferencia de JS. El codigo agregado en Postman seria el siguiente.
    {
    "id": 10,
    "content": "HTML is easy",
    "date": "209",
    "important": true
    }
    - El codigo terminado en Studio Code seria el siguiente.
    //POST NOTES
    app.post('/api/notes/', (req, resp) => {
        const newNote = req.body
        const resultNotes = notes.concat(newNote)
        console.log(resultNotes)
        resp.status(201).json(newNote)
    - Tener encuenta que tambien fue necesario agregar el controlador express.json
    - Verificar en cmder el resultado arrojado.
        Server running on http://localhost:3001
    [ { id: 10, content: 'HTML is easy', date: '209', important: true } ]
    - Verificar en Postman, en el body el status agregado.
        201Created      372 ms      304 B



EJEMPLOS

DESTRUCTURING
1)
const arr = [1, 2, 5, 6, 7, 8, 9, 10]
const [a, b, c, , , f] = arr 
console.log(a, b, c, f)  //  1 2 5 8
2)
const obj = {saludar: "Hola", b: "Todos"}
const {saludar, b} = obj
console.log(b)  //  Todos

SPREAD OPERATOR (Se utilizan los 3 puntos "...")
1)
const nums = [1, 3, 2, 9]
const max = Math.max(...nums)  //  9
2)
const user = {
    name: 'Fede',
    lastName: 'Abel',
    age: 30,
}
const newUser = {
    ...user,
    role: 'Admin',
    age: 28,
}
console.log(user)  //  name: 'Fede', lastName: 'Abel', age: 30 
console.log(newUser)  //  name: 'Fede', lastName: 'Abel', age: 28, role: 'Admin'


MIDDLEWARES
Definición: Los middlewares son funciones que se invocan en cada petición HTTP y permiten implementar funcionalidades transversales, es decir, que aplican a varias rutas como autenticación, logging, compresión y manejo de errores, entre otros.

Toda función que se va a interceptar para que realice determinadas tareas. Es un interceptador, ejemplo, intercepta un llamado, y devuelve una respuesta. 
Se encadenan intersecciones a una determinada solicitud.
Se utiliza next() para seguir con las siguientes ejecuciones.

    const logger = (req, res, next) => {
        console.log("Nueva petición http")
        next()  // esto es necesario para que la petición continue
    }
    