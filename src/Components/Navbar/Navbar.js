import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <h1>BookStore</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
