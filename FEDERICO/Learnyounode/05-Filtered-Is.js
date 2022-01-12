'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]  // concatena el punto en la extension.

fs.readdir(folder, (err, list) => {    // recibe como parámetros: una ruta(path) y un callback.
    if (err) return                    // Si existe error, lo muestra primero.
    list.forEach(Element => {     // Recorro los arreglos de forma sencilla (elementos = archivos)
        const arr = path.extname(Element) // Filtrar los archivos por extension. Modulo path y funcion extname. Utilizado para filtrar los elementos.
        if (arr===`${ext}`) {    // Debe listar solamente los archivos que son de esa extension (extension que queremos verificar)
            console.log(Element);
        }
    })
})