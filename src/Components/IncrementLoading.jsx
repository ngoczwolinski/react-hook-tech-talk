import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function IncrementLoading() {
  // Declare the initial state & its setState
  const [count, setCount] = useState(0);
  const [content, setContent] = useState('');

  // Declare an update method
  const handleIncrement = () => setCount((count) => count + 1);

  // Side Effect for COMPONENT DID UPDATE
  useEffect(
    () => {
      if (count >= 5) {
        const algoGod = 'zacharydfreeman';
        setContent(`https://github.com/${algoGod}.png?size=200`);
      }
    },
    // Dependency array: we depend of count of clicks to render the algoGod image
    [count]
  );

  // Render the component
  return (
    <div className="center">
      <button className="increment" onClick={handleIncrement}>
        You clicked me {count} times.
      </button>
      {content ? (
        <img src={content} alt="The Algo God" />
      ) : (
        <div>
          <h4>ALGO GOD IS BEING LATE</h4>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default IncrementLoading;
