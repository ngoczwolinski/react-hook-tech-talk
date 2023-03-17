import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import FetchBoardGame from './FetchBoardGame';

function ExampleUseReducer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`buttons ${theme}`}>
      <h1>useReducer</h1>
      <FetchBoardGame />
    </div>
  );
}

export default ExampleUseReducer;
