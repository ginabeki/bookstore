import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './Components/Pages/Books';
import Categories from './Components/Pages/Categories';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories/:name" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
