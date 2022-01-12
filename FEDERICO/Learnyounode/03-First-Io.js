const fs = require('fs')
const file = process.argv[2]
const bufferFile = fs.readFileSync(file)
const lines = bufferFile.toString().split('\n').length -1
console.log(lines)

// 1) Carga del modulo "fs" de node
// 2) Se crea una constante "file"
    //Aclaración: process.argv
    // Una matriz que contiene los argumentos de la línea de comando. 
    // El primer elemento será 'nodo', el segundo elemento será el nombre del archivo JavaScript.
    // Los siguientes elementos serán argumentos de línea de comando adicionales.
    // En resumen, los elementos 0 y 1 son nativos de node.js, y no los usamos cuando escribimos
    // ningún argumento de línea de comando. Es por eso que ignoramos 0 y 1 y siempre comenzamos desde 2.
// 3) Verificamos que nos manda el ejercicio (Lo hacemos correr en cmder). El programa learnyounode suministra el "txt"
// a traves de learnyounode run 03-first-io.js
    // const fs = require('fs')
    // const file = process.argv 
    // console.log(file)
// cmder arroja las siguientes rutas:
// 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\Matias Moreno Avila\\Desktop\\FEDE\\FULL STACK DEVELOPER\\Proyectos-FullStack\\fullstack-js-makeitreal\\Federico\\learnyounode\\03-first-io.js',
// 'C:\\Users\\MATIAS~1\\AppData\\Local\\Temp\\_learnyounode_105320.txt'
// Elegimos la ruta en analisis "_learnyounode_105320.txt", file en la posisicón 2. Ya tendriamos el archivo.
// 4) Creamos el bufferFile (Representación de lo que hay en la memoria RAM a traves de números) como constante
// y hacemos el archivo del tipo sincrono.
// 5) Para que se pueda leer se transforma el bufferFile en un string con un separador de saltos
//(split)
// 6) Nótese que el fichero de test no tiene ningún salto de línea ('\n') al final de la última línea, con lo
//que al usar este método acabarás obteniendo un array que tiene un elemento más que el número de saltos de línea.
// "length -1"