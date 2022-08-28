import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
);
