// App.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Link from 'next/link';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#210a0aff',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={appStyle}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br/>
      <Link href="/product/shop"> <button>Shop here</button> </Link>
    </div>
  );
};

export default App;
