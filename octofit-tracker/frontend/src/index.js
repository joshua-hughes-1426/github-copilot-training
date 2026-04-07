import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set the REACT_APP_CODESPACE_URL from environment or fallback for local dev
if (!process.env.REACT_APP_CODESPACE_URL) {
  // You should set this in your .env file for production
  process.env.REACT_APP_CODESPACE_URL = 'https://$REACT_APP_CODESPACE_NAME-8000.app.github.dev';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
