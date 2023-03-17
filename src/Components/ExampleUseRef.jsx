import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import IncrementLoading from './IncrementLoading';

function ExampleUseRef() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`buttons ${theme}`}>
      <h1>useRef</h1>
      <h4>After Button is clicked 5 times, render the Algo god</h4>
      <IncrementLoading />
    </div>
  );
}

export default ExampleUseRef;
