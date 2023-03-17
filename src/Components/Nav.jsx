import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';

function Nav() {
  // De-structure the context to get theme & setTheme
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`nav ${theme}`}>
      <Link className="link" to="/">
        About
      </Link>
      <Link className="link" to="/usestate">
        useState
      </Link>
      <Link className="link" to="/useeffect">
        useEffect
      </Link>
      <Link className="link" to="/useref">
        useRef
      </Link>
      {/* useReducer is commented due to limited time for demo */}
      <Link className="link" to="/usereducer">
        useReducer
      </Link>
      {/* Create Button for toggle theme */}
      <button
        className="button-theme"
        onClick={() =>
          setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
        }
      >
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </div>
  );
}

export default Nav;
