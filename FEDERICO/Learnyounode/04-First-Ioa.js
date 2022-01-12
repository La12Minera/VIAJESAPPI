const fs = require('fs')
const file = process.argv[2]
fs.readFile(file, (error, data) => {  
    const lines = data.toString().split('\n').length -1
    console.log(lines)
})

// console.log(file) // muestra el archivo
// fs.readFile(file, (error. data) => {  //  procesar el resultado con una función de callback (=>) que se invoca al terminar la lectura del archivo.
//Aclaración: 
    //fs.readFile:
    // 1er parametro: path, ruta del archivo para leer "file"
    // 2do parametro: es opcional (?)
    // 3er parametro: una función con dos parametros, error y datos, para ejecutar
        // (error. data) => {}
