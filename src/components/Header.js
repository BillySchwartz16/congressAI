import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <Logo />
      <SearchBar />
      <UserMenu />
    </header>
  );
}

export default Header;
