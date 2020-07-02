import React from 'react';
import Router from '../Router';

function Header() {
  return (
    <header class="page-header">
      <nav>
        <h2 class="logo">LOGO</h2>
        <Router></Router>
      </nav>
    </header>
  );
}

export default Header;
