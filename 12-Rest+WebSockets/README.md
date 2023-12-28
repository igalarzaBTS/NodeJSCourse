# Rest + Web socket

Esta applicación es una simulación de colas de tickets. Como el de un banco.

## Instrucciones
1. Clonar .env.template a .env y configurar las variables de entorno
2. Ejecutar `npm install` para instalar las dependencias
4. Ejecutar `npm run dev` para levantar el proyecto en modo desarrollo

## Uso

La app se divide en 3 pantallas:

1. Pantalla de creación de tickets. En esta pantalla podremos crear nuevos tickets en la cola para ser atendidos.
Podemos acceder a esta pantalla mediante la siguiente url: ```http://localhost:3000/new-ticket.html```

2. Pantalla de escritorio. Esta pantalla se encarga de atender los tickets de la cola.
Podemos acceder a esta pantalla mediante la siguiente url: ```http://localhost:3000/desk.html?escritorio=5```
<b>Nota: Se puede abrir más de un escritorio a la vez</b>

3. Lista de tickets en la cola. Esta pantalla muestra los tickets y los escritrios que los atenderán.
Podemos acceder a esta pantalla mediante la siguiente url: ```http://localhost:3000/public.html```