import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import { BrowserRouter } from 'react-router-dom';
import { GeneralProvider } from './context/GeneralContext'; // Your custom context

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </BrowserRouter>
  </React.StrictMode>
);
