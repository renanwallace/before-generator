import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Default from './pages/Default';

function App() {
  return (
    <BrowserRouter history={history}>
      <Default />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
