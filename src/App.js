import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Components/Pages/Books';
import Categories from './Components/Pages/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
