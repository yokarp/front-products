# DETAILS.md

## Descripción del Proyecto

Este proyecto es una aplicación completa con un backend en Node.js (Express) y un frontend en Angular. La aplicación permite gestionar productos, donde cada producto tiene un nombre, una fecha de vencimiento, cantidad y peso, y los usuarios pueden agregar, editar y eliminar productos. Además, la aplicación permite organizar los productos por fecha de vencimiento y cantidad.

## Tecnologías Utilizadas

* Backend: Node.js con Express
* Base de datos: MongoDB (a través de Mongoose)
* Frontend: Angular 12 y Bootstrap
* Control de estado: ngModel para la vinculación de datos en Angular
* Interacción con la API: HttpClient de Angular para llamadas REST

## Decisiones clave

Nodejs siempre me ha parecido un entorno muy cómodo para trabajar, y aunque mi experiencia no es muy profunda con el, siempre me gusta aprender de lo que me llama la atención, por eso decidí hacer el backend con esa tecnología, el frontend aunque es mi fuerte y por donde empecé a programar, está vez se me ocurrió la idea de probar la última versión que es la 18, y realmente han cambiado muchas cosas, ya no se usan tanto los módulos y pues tengo que estudiar esas nuevas actualizaciones si quiero continuar con ese framework, ya que decidí al final trabajar con la que siempre trabajo, y sé que omití demasiadas cosas, como interfaces y formularios con buenas prácticas.

## Sugerencias

* Modularizar el backend
* Middleware de validación
* Manejo de errores
* Autentificación y Autorización
* Optimizar el front y limpiar el código
* Pruebas unitarias
* Mejorar la experiencia con WebSockets o Socket.io