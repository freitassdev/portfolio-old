import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
