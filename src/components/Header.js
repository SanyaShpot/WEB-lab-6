import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.startsWith('/item')) {
      return 'Item Page';
    }

    switch (location.pathname) {
      case '/':
        return 'Home Page';
      case '/catalog':
        return 'Catalog';
      case '/cart':
        return 'Cart';
      default:
        return 'Christmas Tree Store';
    }
  };

  return (
    <header className="header">
      <h1>{getPageTitle()}</h1>
    </header>
  );
};

export default Header;
