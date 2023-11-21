import React from 'react';
import './App.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TwoWayBindingExample from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TwoWayBindingExample />
  </React.StrictMode>
);
reportWebVitals();
