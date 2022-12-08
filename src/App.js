import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Books from './Components/Pages/Books';
import Categories from './Components/Pages/Categories';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route to="/" element={<Books />} />
      <Route to="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
