import React from "react";

import logoGreen from "../../assets/images/logo-green.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#top" className="logo">
          <img src={logoGreen} alt="logo" />
        </a>

        <nav className="nav">
          <ul className="list">
            <li className="nav__item">
              <a href="#top" className="nav__link">Presets</a>
            </li>
            <li className="nav__item">
              <a href="#top" className="nav__link">Prints</a>
            </li>
            <li className="nav__item">
              <a href="#top" className="nav__link">Store</a>
            </li>
            <li className="nav__item">
              <a href="#top" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#top" className="nav__link">Contact</a>
            </li>
            <li className="nav__item nav__item-cart">
              <a href="#top" className="nav__link nav__link-cart">Cart</a>
            </li>
          </ul>
        </nav>

        <div className="hamburger-menu">
          <span className="hamburger-menu__item"></span>
          <span className="hamburger-menu__item"></span>
          <span className="hamburger-menu__item"></span>
        </div>
      </div>
    </header>
  )
}