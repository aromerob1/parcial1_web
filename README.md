# Parcial 1 - Programacion con tecnologias web

Este proyecto permite a los usuarios acceder con una cuenta y ver detalles de diferentes modelos de autos.

## Pasos para ejecutar el proyecto:

1. **Instalación**:
   
   ```bash
   npm install
   ```


2. **Ejecución**:

    ```bash
   npm start
   ```


3. Abra un navegador y vaya a `http://localhost:3000`.

## Decisión de diseño y desarrollo:

El proyecto utiliza `React` junto con `React Router` para la navegación entre páginas y `React Bootstrap` para los estilos. Además, se utilizó `react-intl` para la internacionalización.

### Componentes:

1. **App.js**: Es el componente raíz que configura las rutas y muestra el componente correspondiente.
2. **Log.js**: Proporciona un formulario de acceso para que los usuarios ingresen y validen su correo electrónico y contraseña.
3. **Home.js**: Muestra una lista de modelos de autos. Cada modelo puede hacerse clic para ver más detalles.
4. **Detail.js**: Muestra detalles sobre un modelo de auto seleccionado.
5. **CardComponent.js**: Un componente de tarjeta que muestra información breve sobre un modelo de auto.

### Librerías y herramientas:

- **React Router**: Para la navegación y el manejo de rutas.
- **React Bootstrap**: Proporciona componentes con estilo y una cuadrícula flexible.
- **React-intl**: Para la internacionalización y la traducción de mensajes.

### Datos:

Los datos se extraen de una API externa en formato JSON que se encuentra en el repositorio con el nombre datos.json.

## Proceso de desarrollo:

El proyecto comenzó con la configuración básica de `create-react-app` y luego se instaló `react-router-dom` y `react-bootstrap`. A partir de ahí, se crearon los componentes base y se configuraron las rutas.

Para el acceso, se introdujo la validación básica de correo electrónico y contraseña. Una vez que se validan los datos del formulario, el usuario puede ver la lista de modelos de autos.

El componente `Detail` muestra información detallada sobre un modelo de auto seleccionado, mientras que `CardComponent` es un componente reutilizable que muestra la información en formato de tarjeta.

La internacionalización se manejó mediante `react-intl`, lo que permite cambiar fácilmente entre diferentes idiomas.

## Conclusión:

El proyecto demuestra una aplicación simple de React con enrutamiento, internacionalización y estilos utilizando Bootstrap. Es escalable y se pueden agregar más características según sea necesario.
