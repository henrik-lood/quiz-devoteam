import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import UsersProvider from "./contexts/UsersContext";
import App from './App';
import './Global.css'
import './components/Button.module.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </StrictMode>,
);
