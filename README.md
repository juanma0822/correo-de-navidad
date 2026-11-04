# Correo de Navidad

Aplicación web en un solo archivo, lista para abrir o publicar como sitio estático. La familia escribe su nombre, elige Santa o Niño Dios, redacta la carta y la comparte por WhatsApp, correo, el menú de compartir del dispositivo o copiándola.

## Envío automático por correo

La página ya prepara el asunto con el nombre de quien escribe y genera una imagen PNG de la cartita. El receptor de correo está en `apps-script/Code.gs` y usa Google Apps Script para enviarla a tu Gmail como adjunto.

Para activar el envío automático, crea un proyecto en [script.google.com](https://script.google.com), pega el contenido de `apps-script/Code.gs` y luego:

1. En **Implementar → Nueva implementación**, elige **Aplicación web**.
2. Configura **Ejecutar como: Yo** y acceso para **Cualquier persona**.
3. Implementa, acepta los permisos de envío de correo y copia la URL que termina en `/exec`.
4. En `index.html`, pega esa URL en `EMAIL_ENDPOINT`.
5. Publica de nuevo el sitio para que la familia use la versión conectada.

Apps Script ejecuta la función como la cuenta que implementa la aplicación web; por eso el correo sale automáticamente desde tu cuenta autorizada. [Documentación de implementación](https://developers.google.com/apps-script/guides/web) · [Envío de correo con adjuntos](https://developers.google.com/apps-script/reference/mail/mail-app)

## Abrir o publicar

Abre `index.html` en el navegador para usarla. Para compartirla con la familia, publica el archivo en cualquier servicio de alojamiento web estático; el menú nativo de compartir del teléfono requiere que el sitio esté publicado bajo HTTPS.
