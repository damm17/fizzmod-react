# Comandos para GIT
· git clone (url) .     
[Clonar el repositorio en local]

· git status   
[Chequear el estado para ver si hay commits pendientes o archivos sin trackear]

· git add -A    
[Trackear todos los archivos]

. git commit -m "(mensaje para el commit)"      
[Hacer un commit]

· git pull origin master        
[Hacer un pull del repositorio y actualizar archivos locales. En este caso del branch "master"]

· git push origin master        
[Hacer un push y subir los cambios locales al repositorio. En este caso hacia el branch "master"]

· git branch (nombre del branch)        
[Crear un nuevo branch, en base a dónde estemos parados (master en general)]

· git checkout (nombre del branch)      
[Cambiar de branch]

· git log       
[Resumen de los commits que se fueron haciendo sobre el repositorio]

· git merge (nombre de la rama con cambios)         
[Primero hago un checkout a master, luego el merge para unir la rama con el directorio principal.]

· git branch -d/-D (nombre de la rama)      
[Borrar una rama de forma local]

· git push origin --delete (nombre de la rama)      
[Borrar la rama del repositorio] 