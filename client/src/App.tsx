import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContext, ThemeProvider } from 'context/ThemeContext';
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const themeCtx = useContext(ThemeContext);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className={`${themeCtx.dark && 'dark'}`}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
