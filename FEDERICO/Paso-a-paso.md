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

1- Crear un nuevo repositorio en HitHub. Agrego dicho repositorio como un remoto

2- Nuevo 