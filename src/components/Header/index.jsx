import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import './mobile-styles.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isFoldable, setIsFoldable] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    // If no stored preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const location = useLocation();

  // Handle dark mode state changes
  useEffect(() => {
    // Update body class based on dark mode state
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Store preference in localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // Listen for system color scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only apply if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for tablet and foldable device screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      // iPad Pro and similar tablets (834px width in portrait mode)
      setIsTablet(window.innerWidth <= 834);
      
      // Asus Zenbook Fold in folded mode and similar foldable devices
      setIsFoldable(window.innerWidth <= 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isTablet ? 'tablet' : ''} ${isFoldable ? 'foldable' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <h1>Kundena<span>Akhil</span></h1>
          </Link>

          <div className={`nav-content ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Navigation links */}
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className={`nav-link ${isActive('/education') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className={`nav-link ${isActive('/certificates') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
              </li>
            </ul>

            {/* Theme toggle for desktop view */}
            <div className="theme-toggle desktop-only" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </div>

          </div>

          {/* Theme toggle for mobile view - positioned left of hamburger */}
          <div className="mobile-controls">
            <div className="theme-toggle mobile-only" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </div>

            {/* Show hamburger menu for tablet and foldable devices */}
            <div 
              className={`mobile-menu ${isTablet ? 'visible' : ''}`} 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;