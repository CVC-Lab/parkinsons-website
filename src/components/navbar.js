import * as React from "react"
import { Link } from "gatsby";
import "./style.css"
import { Link as LinkRouter } from "gatsby";

const DropdownMenu = ({ links }) => {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#fff',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column', 
    }}>
      {links.map(link => (
        <LinkRouter key={link.name} to={link.scroll_link === true ? `/#${link.link}` : link.link} style={{
          display: 'block',
          padding: '12px 16px',
          color: '#333f48',
          // textDecoration: 'none',
          // fontSize: '.73rem',
          // fontWeight: '700',
        }}>
          {link.name}
        </LinkRouter>
      ))}
    </div>
  );
};

const Navbar = ({ menuLinks }) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  
  const dropdownLinks = menuLinks.filter(link => link.type === 'background' && link.name !== 'Background');
  const otherLinks = menuLinks.filter(link => link.type !== 'background' && link.name !== 'Background');
  console.log('dropdown links', dropdownLinks)
  return (
  <div className="navbar-container">
    <nav>
      <ul className="navbar-list">
      {otherLinks.map(link => (
            <li key={link.name} style={{ listStyleType: `none`, paddingLeft: '1rem', paddingRight: '1rem'}}>
              <LinkRouter to={link.link} style={{textDecoration: `none`}}>
                {link.name}
              </LinkRouter>
            </li>
          ))}
      <li style={{ listStyleType: `none`, paddingLeft: '1rem', paddingRight: '1rem', position: 'relative' }} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div style={{textDecoration: `none`}}>
            <LinkRouter to={'/background'} style={{textDecoration: `none`}}>
              Background
            </LinkRouter>
            </div>
            {dropdownVisible && <DropdownMenu links={dropdownLinks} />}
          </li>

      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
