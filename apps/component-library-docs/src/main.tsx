/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');
const root = createRoot(app!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
