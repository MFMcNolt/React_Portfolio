import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/" className="header-brand">
        <h1>MFM Brand</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;