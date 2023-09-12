import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>

);
