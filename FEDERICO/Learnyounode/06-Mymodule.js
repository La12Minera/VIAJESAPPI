const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')

/**  // Comentamos
 * 
 * @param {String} dir Directorio a listar 
 * @param {String} ext Extension para filtrar
 * @param {Function} callback Funcion para ejecutar
 */

module.exports = function (dir, ext, callback) {   // Exportar la funcion de 3 parametros
    fs.readdir(dir, (err, list) => {            // Leer el archivo. Recibe una ruta, 
        if (err) {                             // siempre verifique si hay un error
            callback(err)
        }
        const filteredList = list.filter((file) => {
            
        })   
    })   
}
