let sum = 0

for (let index = 2; index < process.argv.length; index++) {
    const element = parseInt(process.argv[index])
    sum += element
}

console.log(sum)

// Ejecuto en cmder node 02-baby-steps.js 3 45 34 2