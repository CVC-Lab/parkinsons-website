import * as React from "react"
import { Link } from "gatsby";
import "./style.css"

const Navbar = ({ menuLinks }) => (
  <div className="navbar-container">
    <nav>
      <ul className="navbar-list">
        {menuLinks.map(link => (
          <li key={link.name} className="navbar-item">
            <Link 
              to={link.link} 
              className="navbar-link-router" 
              activeClassName="active">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
