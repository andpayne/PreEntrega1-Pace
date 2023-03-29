import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //importate y ejecutate 
import { App } from './components/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


