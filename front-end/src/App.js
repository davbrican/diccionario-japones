import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Insert } from './pages';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crear" element={<Insert />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
