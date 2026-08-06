import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import './Header.css';
import logo from '../assest/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // navigate initialize kiya

  const closeMenu = () => setMenuOpen(false);

  // Login page par bhejne ke liye function
  const handleLoginRedirect = () => {
    closeMenu(); // Agar mobile menu open hai toh close karega
    navigate('/login');
  };

  return (
    <header className="site-header-wrapper">
      <div className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" onClick={closeMenu}>
            <span className="brand-mark">
              <img src={logo} alt="Parekh Jewelers Logo" />
            </span>
            <span className="brand-name">PAREKH JEWELERS</span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            {/* Cart Button ab login page pe le jayega */}
            <button 
              className="icon-btn" 
              aria-label="Cart" 
              onClick={handleLoginRedirect}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
                  fill="none"
                  stroke="#b3703e"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9.5" cy="20.5" r="1.4" fill="#b3703e" />
                <circle cx="17.5" cy="20.5" r="1.4" fill="#b3703e" />
              </svg>
            </button>
            
            {/* Desktop Sign In Button */}
            <button className="sign-in-btn" onClick={handleLoginRedirect}>
              Sign in
            </button>

            <button
              className="menu-toggle-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-menu-links" aria-label="Mobile">
              <Link to="/services" onClick={closeMenu}>Services</Link>
              <Link to="/process" onClick={closeMenu}>Process</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </nav>
            {/* Mobile Sign In Button */}
            <button className="mobile-signin-btn" onClick={handleLoginRedirect}>
              Sign in
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;