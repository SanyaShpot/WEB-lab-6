import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      
      {location.pathname === '/catalog' && (
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      )}
    </nav>
  );
};

export default NavBar;
