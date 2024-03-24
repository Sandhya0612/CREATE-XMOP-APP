import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Include if you have global styles in index.css
import App from './App'; // Main app component, typically found in App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
