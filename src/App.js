import React from 'react';
import './App.css';
import Log from './components/Log';
import Home from './components/Home';

function App() {
  return (
    <div>
      <header>
        <Log></Log>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
