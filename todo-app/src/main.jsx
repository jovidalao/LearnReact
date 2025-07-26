/**
 * Entry point for the React Todo Application
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Get the root element from the HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);