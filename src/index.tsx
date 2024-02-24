import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@app/App';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
