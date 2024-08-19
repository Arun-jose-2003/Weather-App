import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import { StateContextProvider } from './Context';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
