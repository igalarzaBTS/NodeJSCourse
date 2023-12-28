# dev

1. Clonar el .env.template y crear el .env
2. ```npm install```
3. Ejecutar el comando ```docker compose up -d```
4. Reconstruir el prisma client ```npm run prisma:migrate:prod```


# Funcionalidades

Esta aplicación bacckend contiene varias funcionalidades a probar

## Public web page
La ruta ```localhost:3000/public/index.html``` re dirige a una página web de super heroes.
<b>Nota:</b> La página web no fue creada por mi, solo creamos una ruta publica para poder previsualizarla.

## TODO
Es una API de tareas. Sus endpoints son:

- GetAllTODOs -> ```localhost:3000/api/todos/```
- GetTODOById -> ```localhost:3000/api/todos/?id=1```
- CreateTODO -> ```localhost:3000/api/todos```
- UpdateTODO -> ```localhost:3000/api/todos/1```
- DeleteTODO -> ```localhost:3000/api/todos/2```