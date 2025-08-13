
import React from 'react';
import App from './app';
import { ThemeProvider } from './ThemeContext';

const HomePage = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default (HomePage);


