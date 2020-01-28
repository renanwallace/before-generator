import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <GlobalStyle />
        <Routes />
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
