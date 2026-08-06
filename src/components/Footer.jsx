import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span>© 2026 Parekh Jewelers</span>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
        <div className="footer-social">
          <a href="#instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="21" height="22" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="21" height="22" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="8.5" r="1.1" fill="currentColor" />
              <path d="M7 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.3-2.5S17 12.1 17 13.5V17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </a>
          <a href="#youtube" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
              <rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
