import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStateProvider } from './store/global/global.provider';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);
