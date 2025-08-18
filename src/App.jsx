import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Cplusplus from './Pages/Cplusplus';
import Java from './Pages/Java';
import Python from './Pages/Python';
import Database from './Pages/Database';
import Htmlcss from './Pages/Htmlcss';
import Javascript from './Pages/JavaScript';
import IntroToProgramming from './Pages/IntroToProgramming';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cplusplus" element={<Cplusplus />} />
      <Route path="/java" element={<Java />} />
      <Route path="/python" element={<Python />} />
      <Route path="/database" element={<Database />} />
      <Route path="/htmlcss" element={<Htmlcss />} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/introtoprogramming" element={<IntroToProgramming />} />
    </Routes>
  );
}

export default App;
