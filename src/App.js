import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import history from './services/history';
import Routes from './routes';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter history={history}>
        <GlobalStyle />
        <Routes />
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
