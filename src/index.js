// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is correct
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path if necessary
import App from './App';
import './index.css';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);