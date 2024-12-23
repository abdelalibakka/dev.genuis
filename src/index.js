import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct API for React 18
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Initialize the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
