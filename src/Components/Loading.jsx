import React, { useEffect, useRef, useState } from 'react';

export default function Loading() {
  // Initialize content of loading page:
  const [content, setContent] = useState('LOADING');
  // Intialize variable to hold interval ID between renders
  const interval = useRef(null);

  // Side Effect for COMPONENT DID MOUNT (since dependecy array is empty)
  useEffect(
    () => {
      // Use setInterval to have dynamic loading content
      interval.current = window.setInterval(() => {
        setContent((content) =>
          content === 'LOADING...' ? 'LOADING' : `${content}.`
        );
      }, 300);

      // Side effect: when COMPONENT WILL UNMOUNT => clear intervalID
      return () => window.clearInterval(interval.current);
    },
    //   Dependency array: Empty array => side effect for COMPONENT DID MOUNT
    []
  );
  return <p className="loading">{content}</p>;
}
