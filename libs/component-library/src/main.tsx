/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import App from './app/app';

const app = document.getElementById('root');
const root = createRoot(app!);

root.render(<App />);
