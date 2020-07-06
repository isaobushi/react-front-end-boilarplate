import React from 'react';
import './App.css';
import Router from './router/Router';
import { routes } from './router/config';
import { BrowserRouter } from 'react-router-dom';
import { Global } from "./app.styles"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Global />
      <Router routes={routes} />
    </BrowserRouter>)
}

export default App;
