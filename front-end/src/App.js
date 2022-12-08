import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Palabra } from './pages';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Palabra" element={<Palabra />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
