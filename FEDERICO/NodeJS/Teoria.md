Actualizar Node.js
1- Creo una nueva carpeta // Ej. mkdir server-one
2- Creo un nuevo archivo node.js // Ej. touch .nvrmc
3- Salgo de la nueva carpeta // Ej. cd ..
4- Ingreso nuevamente a la nueva carpeta // Ej. cd server-one/
5- Verifico la versión nueva de node (la obtengo de nodejs.org) // Ej. node -v
6- Comienzo con un nuevo proyecto de Node.js 
7- Inicializamos el proyecto// npm init // puede ser con npm init -y para crear un proyecto rápido
   Otra forma puede ser inicializando el proyecto en git // git init
     Ejemplo:
package name: (server-one) server-demo
version: (1.0.0)
description: "Es un servidor de ejemplo"
entry point: (index.js)
test command:
git repository:
keywords: server, node, demo, Federico
author: Federico Abeldaño
license: (ISC) "MIT"
Sorry, license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICENSE IN <filename>" and license is similar to the valid expression "MIT".
license: (ISC)
About to write to C:\Users\Matias Moreno Avila\Desktop\FEDE\FULL STACK DEVELOPER\Proyectos-FullStack\fullstack-js-makeitreal\Federico\server-one\package.json:

{
  "name": "server-demo",
  "version": "1.0.0",
  "description": "\"Es un servidor de ejemplo\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "server",
    "node",
    "demo",
    "Federico"
  ],
  "author": "Federico Abeldaño",
  "license": "ISC"
}


Is this OK? (yes) yes

C:\Users\Matias Moreno Avila\Desktop\FEDE\FULL STACK DEVELOPER\Proyectos-FullStack\fullstack-js-makeitreal\Federico\server-one (master) (server-demo@1.0.0)
λ

8- Se creara un archivo package.json (aparecera en Studio Code) con todas las caracteristicas antes cargadas.
9- Crear un archivo index.js (archivo principal)
10- Hacer tarea por defecto que tiene todo nodejs.
     "scripts": {
          "start": "node index.js",
11-Correr en cmder // npm run start  // Ese start es el que se va a ejecutar en el servidor.
12- En desarrollo ejecuto dev.
     "dev": "node index.js",
11-Correr en cmder // npm run dev  // 



CREAR UN SERVIDOR DE NODEJS
1- Nodejs tiene modulos que nos permiten hacer ciertas cosas. Ej. http nos va permitir crear un servidor 
     const http = requiere()  // Creo una constante http y le asigno un requiere con el objetivo de importar el modulo desde nodejs. Es decir, trae el modulo http que tiene nodejs y la guarda en la variable "const http".
2- const app = http.createServer((request, respose)) => {
     respose.writeHead(200, {'Content-type': text/plain'})
     respose.end('Hello world')
}
    
     -Crear una aplicación: const app  //  Cuando se ejecute la aplicación cree un servidor.
     -Responda con una cabecera: De 200 que mande un objeto
     -Objeto: Texto plano
     -Responda con un body o cuerpo = Hola mundo
3- Es necesario que el servidor levante un puerto  //  const PORT = 3001
4- El servidor siempre tiene que escuchar a ese cuerpo  // app.listen(PORT)
5- Por ultimo un console.log  //  console.log('Server running on port ${PORT}')
6- Correr en cmder  // npm run dev
7- Me voy al navegador  // localhost:3001  // Hello World
8- Verificamos:
     - Inspeccionamos.
     - Vamos a Red y recargamos.
     - Vemos el local host en los encabezados  //  Content-type: text/plain

Aclaración: request: Es lo que el usuario le esta solicitando al servidor. En este caso lo unico que se esta solicitando es que tire una pagina. Entonces el usuario me hace un request y el servidro le da un response.
            response: El servidor responde una pagina que tiene un hello world y que el texto es plano.
9- Instalo paquete npm para que cada vez que requiera hacer un cambio en el proyecto, me lo actualice automaticamente  // npm i -D nodemon  // En index.js cambio:
                                                  "dev": "node index.js",
                                                  por
                                                  "dev": "nodemon index.js",
Aclaración: Solo desarrrollo (dev) "Lo que ejecutamos los desarrolladores" es necesario hacer el cambio a mon, en cambio en producción (start) "Lo que va al cliente final, ej. Amazzon, google, etc" NO se debe agregar mon.
10- Función flecha (=>) / Arrow: Se utiliza para evitar que el valor this sea diferente (Evita el contexto que tiene el this, no afecta) 
          Es necesario siempre hacer la función flecha y no la que veniamos trabajando para no tener problemas.
          Esta // const myFunction = function (request, respose) {
               Reemplazarla por:
               // const hola = (name) => {
                    
               }
          }

TEORÍA 1: INTRODUCCIÓN
1 - Abrir cmder. Iniciar con "javascripting".
2 - Para mantener el orden, procederemos a crear una carpeta para este
  workshop.
3 - Ejecuta el siguiente comando, cambiando el nombre de la carpeta o
  colocando el path que necesites:
     mkdir javascripting
4 - Cambia de directorio a la carpeta que acabas de crear:
     cd javascripting
5 - Inicializar el proyecto en git  //  git init  // De esta forma estamos en master
5 - Crea un archivo llamado introduction.js utilizando:
     touch introduction.js
  , o si utilizas Windows
     type NUL > introduction.js
  (type es parte del comando!)
6 - Agrega el siguiente texto al archivo:
     console.log('hello')
7 - Comprueba si tu programa es correcto ejecutando el siguiente comando:
     javascripting verify introduction.js


TEORIA 2: VARIABLES (Ejercicio 2 de 20)

  Una variable es una referencia a un valor. Define una variable usando la
  palabra reservada let.
  Por ejemplo:
     let example
  La variable anterior es declarada, pero no definida.
  A continuación damos un ejemplo de cómo definir una variable, haciendo que
  referencie a un valor específico:
     const example = 'some string'
  Nota que empieza con la palabra reserva let y usa el signo de igualdad
  entre en nombre de la variable y el valor que referencia.
 ## El ejercicio
  1 - Crea un archivo llamado variables.js
  2 - En ese archivo crea una variable llamada example.
  3 - Haz que la variable example referencie el valor 'some string'.
  4 - Luego usa console.log() para imprimir la variable example a la consola.
  5 - Comprueba si tu programa es correcto ejecutando el siguiente comando:
  javascripting verify variables.js
 ─────────────────────────────────────────────────────────────────────────────
  Necesitas ayuda? Vista el README de este workshop:
  (https://github.com/workshopper/javascripting)
 ─────────────────────────────────────────────────────────────────────────────
   » Para ver estas instrucciones de nuevo, ejecute: javascripting print
   » Para ejecutar su programa en un entorno de pruebas, ejecute:
     javascripting run program.js
   » Para verificar su programa, ejecute: javascripting verify program.js
   » Para más información, ejecute: javascripting help


TEORIA 3: STRINGS

Una string representa una cadena de caracteres y se puede definir con
  comillas dobles o simples.
  Por ejemplo:
     'this is a string'
     "this is also a string"
 ## NOTA
  Trata de permanecer consistente. En este workshop usaremos comillas
  simples.
 ## El ejercicio
1 - Para este ejercicio, crea un archivo llamado strings.js.
2 - En ese archivo define una variable llamada someString de la siguiente
  forma:
     const someString = 'this is a string'
3 - Utiliza console.log para imprimir la variable someString a la terminal.
4 - Comprueba si tu programa es correcto ejecutando el siguiente comando:
  javascripting verify strings.js


  TEORIA 4: LONGITUD DE STRINGS

  Muy seguido necesitarás saber cuantos caracteres hay en una string.
  Para esto, usarás la propiedad .length. Por ejemplo:
     const example = 'example string'
     example.length
 ## NOTA
  Asegúrate de que hay un punto entre example y length
  El código de arriba devuelve el numero del total de caracteres en el
  string.
 ## El ejercicio
1 - Crea un archivo llamado string-length.js.
2 - En ese archivo, declará una variable llamada example.
3 - Haz que la variable example referencie el valor 'example string'.
4 - Utiliza console.log para imprimir el length de la string a la terminal.
5 - Comprueba si tu programa es correcto ejecutando el siguiente comando:
  javascripting verify string-length.js
