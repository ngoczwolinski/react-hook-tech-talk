import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import IncrementAlgoGod from './IncrementAlgoGod';

function ExampleUseEffect() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`buttons ${theme}`}>
      <h1>useEffect</h1>
      <h4>After Button is clicked 5 times, render the Algo god</h4>
      <IncrementAlgoGod />
    </div>
  );
}

export default ExampleUseEffect;
