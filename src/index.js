import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DeckProvider } from './context/DeckContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <DeckProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </DeckProvider>
    
  </React.StrictMode>
);
