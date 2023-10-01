import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"; // Asegúrate de importar los mensajes en inglés

// Detecta el idioma del navegador (esto es solo un ejemplo, puedes establecer el idioma de diferentes maneras)
const browserLanguage = navigator.language.split(/[-_]/)[0]; // 'en' o 'es', etc.

// Selecciona los mensajes basados en el idioma
const messages = browserLanguage === 'es' ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <IntlProvider locale={browserLanguage} messages={messages}>
        <App/>
    </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();