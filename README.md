# FULL TECNOLOGY

![React App](https://raw.githubusercontent.com/lautaroGozalvezGaray/Ecommerce-GozalvezGaray/main/src/Assets/LG.gif)

## Descripción

`Proyecto Final` para el curso de ReactJS de la academia `Coder House` (2022).
La aplicación permite conectarse con un backend realizdo con `Firebase`.
Permite seleccionar ciertos productos, navegar a sus detalles, agregarlos al carrito, poder acceder a él, simular la compra de los productos.
Al clickear sobre el botón "CheckOut", pide llenar un formulario con datos básicos y luego de confirmar;
Se realiza un chequeo en tiempo real del stock y en caso de que el producto cuente con stock se genera un id de orden para el usuario 
y en firebase se guarda la orden con los productos que compró.

**Dependencias utilizadas:**

- Firebase "^9.9.0": Se utlizó con el objetivo de almacenar los productos y las ordenes en una base de datos.

- React-hook-form "^7.33.1": Se utlizó para realizar las validacioones correspondientes en el formulario de datos de usuario.

- React-icons "^4.4.0": Se utilizó para incorporar iconos en diferentes componentes a lo largo de toda la App.

- React-icons "^4.4.0": Se utilizó para incorporar un ruteo dinamico entre componentes de la App.

- React-spinners "^0.13.3": Con esta dependencia se incorporó un loader para mientras los productos son traidos desde la base de datos.

- Sweetalert2 "^11.4.24": Se agregó para mostrar un mensaje luego de que el usuario finalize la comrpa el cual muestra si hay un error o  si la orden se genero con exíto.

## Descargar y correr el proyecto

Una vez clonado o descargado el proyecto, instalar dependencias:

### `npm install`

Correr el servidor:

### `npm start`

Se abre una pestaña del navegador en el puerto 3000:

### Sino copiar esta URL y pegarla en el navegador: `http://localhost:3000`

## Backend

Recordar que tiene un backend realizado con Firebase, por si quieren descargar y correr este proyecto, tienen que generar su backend en firebase sino local con data fake.






