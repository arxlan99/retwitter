import { ThemeContext, ThemeProvider } from 'context/ThemeContext';
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

function App() {
  const themeCtx = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`${themeCtx.dark && 'dark'}`}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
