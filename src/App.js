import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <MemoryRouter history={history}>
      <GlobalStyle />
      <Routes />
    </MemoryRouter>
  );
}

export default App;
