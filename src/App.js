import React from 'react';
import './App.css';
import Log from './components/Log';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:carModel" element={<Detail />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
