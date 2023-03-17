import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import ExampleUseState from './Components/ExampleUseState';
import ExampleUseEffect from './Components/ExampleUseEffect';
import ExampleUseRef from './Components/ExampleUseRef';
import ExampleUseReducer from './Components/ExampleUseReducer';
import ThemeContext from './Components/ThemeContext';

function App() {
  // Initialize theme of the website:
  const [theme, setTheme] = useState('light');
  return (
    // Wrap ThemeContext Provider around the returned JSX component
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usestate" element={<ExampleUseState />} />
            <Route path="/useeffect" element={<ExampleUseEffect />} />
            <Route path="/useref" element={<ExampleUseRef />} />
            <Route path="/usereducer" element={<ExampleUseReducer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
