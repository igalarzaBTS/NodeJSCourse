# Webhook server


1. Ejecutar `npm install`
2. Clonar .env.template como .env en el mismo directorio
3. Configurar las variables de entorno
  - Abir Discord, seleccionar un server, "Settings server/overview" y buscar Apps/Integrations
  - Habilitar Webhooks y copiar la url al archivo .env
4. Ejecutar `npm run dev`
5. Correr ngrok en el puerto 3000. ```ngrok http 3000```
6. Crear un repositorio de Github, habilitar webhook y habilitar el evento "start".
7. Copiar la direccion de ngrok al WebHook de Githhub
8. Probar actualizando las estrellas del repositorio

