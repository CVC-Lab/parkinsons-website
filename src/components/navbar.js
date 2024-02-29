import * as React from "react"
import { Link } from "gatsby";
import "./style.css"
import { Link as LinkRouter } from "gatsby";

const Navbar = ({ menuLinks }) => {
  return (
  <div className="navbar-container">
    <nav>
      <ul className="navbar-list">
      {menuLinks.map(link => (
            <li key={link.name} style={{ listStyleType: `none`, paddingLeft: '1rem', paddingRight: '1rem'}}>
              <LinkRouter to={link.link} style={{textDecoration: `none`}}>
                {link.name}
              </LinkRouter>
            </li>
          ))}
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
