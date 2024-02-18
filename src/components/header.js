import React from 'react';
import { Link } from 'gatsby';
import oden from '../images/oden.png';
import Navbar from './navbar'
import "./style.css"

const Header = ({ siteTitle, menuLinks }) => (
    <header>
      <div className="header-container">
        <div className="logo-title-container">
          <Link to="/">
            <img src={oden} alt="Logo" className="header-logo" />
          </Link>
          <div className="title-container">
            <h1>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                {siteTitle}
              </Link>
            </h1>
          </div>
        </div>
        <Navbar menuLinks={menuLinks} />
      </div>
    </header>
  );
export default Header;