import React from 'react';
import './App.css';
import Router from './router/Router';
import { routes } from './router/config';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return( 
  <BrowserRouter>
    <Router routes={routes} />
  </BrowserRouter>)
}

export default App;
