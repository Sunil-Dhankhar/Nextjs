// pages/_app.js
import React from 'react';
import { ThemeProvider } from './ThemeContext'; // path check kar lena
//import '../styles/globals.css'; // optional

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
