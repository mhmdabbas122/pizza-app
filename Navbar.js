// ...existing code...
import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => setOpenLinks(prev => !prev);

  const closeMenu = () => setOpenLinks(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className={`leftSide ${openLinks ? 'open' : 'close'}`}>
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="Pedro's Pizzeria logo" className="logo" />
        </Link>

        <div className="hiddenLinks" aria-hidden={!openLinks}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
           <Link to="/table" onClick={closeMenu}>Table</Link>
           <Link to="/hello" onClick={closeMenu}>Hello</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/table" onClick={closeMenu}>Table</Link>
        <Link to="/hello" onClick={closeMenu}>Hello</Link>
        <button
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          aria-expanded={openLinks}
          className="menuButton"
        >
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
// ...existing code...