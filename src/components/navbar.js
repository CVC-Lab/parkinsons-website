import * as React from "react"
import { Link } from "gatsby";
import "./style.css"

const Navbar = ({ menuLinks }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-container">
      <nav>
        {/* Desktop nav */}
        <ul className="navbar-list nav-desktop">
          <li className="navbar-item">
            <a href="https://cvc-lab.github.io/" className="back-to-cvc">
              &larr; CVC Projects
            </a>
          </li>
          {menuLinks.map(link => (
            <li key={link.name} className="navbar-item">
              <Link to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="nav-overlay open"
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          onClick={closeMenu}
          onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') closeMenu(); }}
        />
      )}

      {/* Mobile slide-in menu */}
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <a href="https://cvc-lab.github.io/" onClick={closeMenu}>
          &larr; Back to CVC Projects
        </a>
        {menuLinks.map(link => (
          <Link key={link.name} to={link.link} onClick={closeMenu}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
