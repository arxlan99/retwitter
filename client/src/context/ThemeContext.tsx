import { createContext, useState } from 'react';

interface ThemeContextInterface {
  dark: boolean;
  toggleTheme: () => void;
}

const defaultState: ThemeContextInterface = {
  dark: localStorage.getItem('theme') === 'dark' ? true : false,
  toggleTheme: () => {},
};

export type State = typeof defaultState;

export const ThemeContext = createContext<State>(defaultState);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleTheme = () => {
    setDark((prev) => {
      localStorage.setItem('theme', prev ? 'light' : 'dark');
      return !prev;
    });
    window.location.reload();
  };

  const value: ThemeContextInterface = {
    dark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
