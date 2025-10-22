import * as React from "react"
import { Link } from "gatsby";
import "./style.css"

const Navbar = ({ menuLinks }) => {
  return (
  <div className="navbar-container">
    <nav>
      <ul className="navbar-list">
      {menuLinks.map(link => (
            <li key={link.name} style={{ listStyleType: `none`, paddingLeft: '1rem', paddingRight: '1rem'}}>
              <Link to={link.link} style={{textDecoration: `none`}}>
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
