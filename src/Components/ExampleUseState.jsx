import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Increment from './Increment';

function ExampleUseState() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`buttons ${theme}`}>
      <h1>useState</h1>
      <h4>The button is a functional component utilizing useState hook</h4>
      <Increment />
    </div>
  );
}

export default ExampleUseState;
