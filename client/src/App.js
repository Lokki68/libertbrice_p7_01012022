import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Connexion from './Pages/Connexion';
import Home from './Pages/Home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Connexion />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
