NUEVA TAREA ASIGNADA

1- Ir a master
    git checkout master

2- Actualizar master (me trae toda la información actualizada de ese branch master)
    git pull origin master

3- Para una nueva tarea, crear una rama a partir de master
    git checkout -b + nombre del nuevo branch

4- Dentro de ese nuevo branch creamos una nueva carpeta en referencia a la tarea en cuestión
    mkdir + nombre de la carpeta

5- Dentro de esa carpeta, creamos un nuevo archivo para iniciar la tarea en cuestión
    touch + nombre del archivo

6- Aceptar los cambios en cmder (Archivo agregado)
    git add .

7- Actualizar los cambios
    git commit -m + "mensaje"

8- Para el ejemplo en curso (index.html)
    html:5

9- Volvemos a repetir los pasos 6 y 7

10- Llevar los cambios guardados al master de github
    git push origin + branch en cuestion


SINCRONIZAR CON GITHUB

1- Crear un nuevo repositorio en HitHub. Este nuevo repositorio es la rama principal.

2- Se puede crear una nueva rama principal. Se agrega en el corredor una nueva rama principal  //  git branch -m MasterCmder-Ejemplo
Aclaración: El nombre MasterCmder-Ejemplo, es el que va a aparecer siempre como rama principal en cmder y al cual se van a ir asignando y cargando todas las modificaciones que vayan surgiendo en el proyecto y todos los nuevos subproyectos que vayan incorporandose.

3- Luego se asocia la nueva rama principal creada en el remoto de HitHub, con el corredor cmder  //  git remote add NombreEjemploDeCmder https://github.com/La12Minera/RAMA-HitHub.git

4- Verificar el nuevo remoto cargado // git remote -v
NombreEjemploDeCmder    https://github.com/La12Minera/RAMA-HitHub.git (fetch)
NombreEjemploDeCmder    https://github.com/La12Minera/RAMA-HitHub.git (push)

5- Llevar o empujar todos los archivos creados del nuevo proyecto a GitHub para que quede como un nuevo repositorio // git push NombreEjemploDeCmder MasterCmder-Ejemplo

6- Una vez creada la rama principal, se pueden ir creando ramas secundarias que tengan solamente subproyectos particulares y no todo el contenido de la rama principal, de esta forma se va trabajando de manera mas ordenada.
                                // git checkout -b RamaSecundaria

7- Una vez dentro de esta rama secundaria, se efectuaran la adición, eliminacion, modificacion y tareas correspondientes al subproyecto en particular. Luego esas tareas seran agregadas, comiteadas y posteriormente empujadas al remoto (NombreEjemploDeCmder).
git add .
git commit -am "Mensaje 1"
git remote -v // verifico el remoto
    NombreEjemploDeCmder    https://github.com/La12Minera/RAMA-HitHub.git (fetch)
    NombreEjemploDeCmder    https://github.com/La12Minera/RAMA-HitHub.git (push)
git push NombreEjemploDeCmder RamaSecundaria

8- Verifico en el navegador de HitHub (realizo los pullRequest, etc.)

9- Al repetir el ciclo con un nuevo subproyecto, primero que nada, desde la rama principal, voy trayendo los nuevos cambios efectuados a dicha rama, provenientes desde HitHub. // git pull NombreEjemploDeCmder MasterCmder-Ejemplo

10- Luego de esto creo un nuevo branch para el subproyecto correspondiente y se vuelve a ejecutar el ciclo // git checkout -b RamaSecundaria2
