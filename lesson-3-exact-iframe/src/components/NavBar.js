import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Домой</NavLink>
      <NavLink to="/reviews" activeClassName="menu__link_active" className="menu__link">Обзоры эмоджи</NavLink>
      <NavLink to="/about-me" activeClassName="menu__link_active" className="menu__link">Обо мне</NavLink>
    </nav>
  )
}

export default NavBar;