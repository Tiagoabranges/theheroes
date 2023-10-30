import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

import { HeroProvider } from './context/HeroContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HeroProvider>
      <App />
    </HeroProvider>
  </React.StrictMode>
);
