import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Increment from './Increment';

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`buttons ${theme}`}>
      <h1>Home</h1>
      <h3>This is a demo for how to use common React Hooks</h3>
    </div>
  );
}

export default Home;
