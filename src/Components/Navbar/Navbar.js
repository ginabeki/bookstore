import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Navbar() {
  return (
    <div className="nav">
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/" className="nav-brand">Bookstore CMS</Link>
          </li>
          <li>
            <Link to="/" className="nav-link">BOOKS</Link>
          </li>
          <li>
            <div className="dropdown">
              <Link to="/categories" className="nav-link">CATEGORIES</Link>
              <div className="dropdown-content">
                <Link to="/categories/comedy">Comedy</Link>
                <Link to="/categories/adventure">Adventure</Link>
                <Link to="/categories/crime">Crime</Link>
                <Link to="/categories/fantasy">Fantasy</Link>
                <Link to="/categories/horror">Horror</Link>
                <Link to="/categories/history">History</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
