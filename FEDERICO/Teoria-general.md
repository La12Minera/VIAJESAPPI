LISTA DE COMANDOS BÁSICOS
ls: Listado de carpeta y archivos
cd /: Cambiando de ubicación (Ejemplo cd carpeta1/)
cd ..= Para volver a la carpeta anterior
mkdir: Creando una carpeta
rm -rf: Eliminando archivos y carpetas
mv: Moviendo acrchivos y carpetas
cp: copiando archivos y carpetas 
cls o clear: Limpiar pantalla
pwd: Nos indica donde estamos parados
touch: Crear un archivo 
code ..= Para abrir el Visual Basic Code
code .= Para abrir el proyecto en el Visual Basic Code
mv CarpetaDeOrigen/nombreDeArchivo..CarpetaDestino/ = Mover archivos
cp CarpetaDeOrigen/nombreDeArchivo..CarpetaDestino/ = Copiar archivos

Crear una nueva rama: git checkout -b Fede_feature master
    El -b indica que la cree si no existe y de este modo pasara automaticamente a esta nueva rama.
    Fede_feature: es el nombre de la rama (Para salir de master y poder trabajar en una rama independiente)
    master: arranque desde master
    De esta forma cambia al nuevo branch

Borrar archivos que no quiero: rm -rf 'no sirve.txt'
    no sirve: es el nombre del archivos

Visualizar como esta el proyecto en el momento: git status
    Para que se rastree es necesario aplicarle commit:
        git commit -am "Delete files"

git push origin Fede_feature: Guardar lo realizado y empujamos el trabajo a github (oriegen) y al final colocamos el nombre (branch) 
    llevamos el trabajo con las modificaciones correspondientes al remoto (github)

git checkout master: Cambiar de branch (De Fede_feature a master) 

git checkout -b + el nombre: Crear un nuevo branch 

git pull origin master: Hacer la inversa a "push". Traer el trabajo.

git log: Historico del branch. Me saltan todos los commit ejecutados. Con q cierro.

git branch: Ver la cantidad de remotos

git branch -v: Ver la cantidad de remotos

git branch -D Fede_feature: elimino el branch

git clone + URL: clona (copia) el repositorio de github

git status: Observar los cambios y modificaciones que se van llevando a cabo

git add . = Termina de agregar las modificaciones realizadas en el Visual status code al storage de git

git commit -m "Agregar descripción/mensaje"= Ya agregamos y esta en el status, necesitamos hacer el commit (Se cierra la idea). Luego se verifica con git status.

git push origin + el nombre del remoto/branch "madre": Agregarlo en las operaciones finalizadas en el commit al remoto "madre" y colocar el repositorio en este. Para visualizar cual es el remoto "madre"es decir el origen, git remote -v.
    En la herramienta de Pull requests de github, le doy click en compare & pull requests (en verde).
    Ir a la barra de master y comparar con el remoto madre.
    Se agrega un revisor (Reviewers).
    Modificar el titulo, es decir asignar la modificación/duda/orden que es necesario realizar.
    Crear (create pull requests): Dar enter a la orden. 
    En resumen, la persona que lo va a revisar sepa que es lo que tiene que hacer.
    Mage pull requests:
    Pull requests (objetivo): A que quiero llegar y contra que la quiero comparar. Si se envia directamente a master no se esta comparando nada.


git commit -am "Agregar descripción/mensaje"= Se acientan los cambios efectuados.

git push origin + el nombre del branch: Se envian las modificaciones realizadas en el branch al origin remoto.

master origin: Me dice que estamos en la carpeta master (nombre por defecto) que ya tiene un origen como tal (Cual es el lugar de origen)
    git remote -v: Me devuelve los origenes (fetch y push) de la carpeta, osea el nombre al cual pertenece.
        
SOLUCIONAR CONFLICTOS

1ro: Actualizar el branch master
2do: Actualizar el branch en cuestión, comparar mi rama con la master, de esta forma partir todos desde una misma base
    - git checkout master: Pasar al master
    - git pull origin master: Actualizar la rama (Nos trae toda la información actualizada del remoto)
    - git merge + el nombre de la rama (Ejemplo master): Fusionar ramas
    - git diff README.md = Visualizar las diferencias y cambios a aceptar.
    - En el Visual Studio Code se vera en verdes los cambios realizados y en naranja los cambios que provienen del master
    - Se decide si se aceptan los cambios o no. 
    - En la parte izquierda (Sourse Control), visualizar los cambios pendientes y en "+" aceptar dichos cambios.
    - Se resuelven los conflictos
    - git commit  -am + mensaje = Efectuar obligatoriamente el commit para llevar el mensaje al remoto github.
    - git push origin + branch en cuestion: Se llevan los cambios al origin master

RESUMEN BÁSICO
    -Clonamos la carpeta FULLSTACK-JS-MANEKEITREAL del https del github profesor (git clone + URL)
    -Creo una carpeta en FULLSTACK-JS-MANEKEITREAL (Federico_Abeldaño)
    -Creo el README.md y escribo sobre él (touch README.md en cmder o directamente desde el Visual Studio Code).
    -Agrego las modificaciones en el cmder (git add .)
    -Agrego el mensaje (git commit "") para que se publiquen las modificaciones.
    -Envio al remoto github todas las modificaciones hechas (git push origin Federico_Abeldaño)
    -En el github clickeo en el compare & pull requests, luego asigno un Reviewers, modifico el titulo y clickeo en create pull requests. Queda solamente que me lo revisen.
    
