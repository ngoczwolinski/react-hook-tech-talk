import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import ExampleUseState from './components/ExampleUseState';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseRef from './components/ExampleUseRef';
import ExampleUseReducer from './components/ExampleUseReducer';
import ThemeContext from './components/ThemeContext';

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
