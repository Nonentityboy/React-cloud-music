import React from 'react';
import './App.css';
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </HashRouter>
  );
}

export default App;
