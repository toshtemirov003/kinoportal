import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/Styles/index.css";
import { AuthProvider } from './context/Authcontext';
import { BrowserRouter as Router,  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
<AuthProvider>
    <App />
</AuthProvider>
  </Router>

  </React.StrictMode>
);

