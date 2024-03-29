import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from '@app/App';

const queryClient = new QueryClient();

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
