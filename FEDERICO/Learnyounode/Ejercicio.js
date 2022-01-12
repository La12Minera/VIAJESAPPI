// Función que divide dos numeros con un tercer parámetro callback.
// Si el valor es cero retornar un error en el callback.
// Sino retornar el resultado de la división.

function div(num1, num2, callback) {
    if (num2 === 0) {
        return callback ('Error')
    }   
    const division = num1 / num2
    return callback (null, division)
}

div(16, 2, (error, result) => {
    if (error) console.log(error)
    else console.log(result)
}) 