import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContexProvider from './contexts/ContexProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import Blogs from './contexts/Blogs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContexProvider>
        <Blogs>
          <App />
        </Blogs>
      </ContexProvider>
    </BrowserRouter>
  </StrictMode>
);
