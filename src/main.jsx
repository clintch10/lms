import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import App from './App.jsx'
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery.js'
import './assets/css/style.css';
import './assets/js/script.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
