import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  const location = useLocation();

  // Handle smooth scrolling to sections
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.pageYOffset;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${section}`) {
                link.classList.add('active');
              }
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode from localStorage or system preference on component mount
  useEffect(() => {
    // Check localStorage first
    const storedDarkMode = localStorage.getItem('darkMode');
    
    if (storedDarkMode !== null) {
      // If user has a preference stored, use that
      if (storedDarkMode === 'true') {
        setIsDarkMode(true);
        document.body.classList.add('dark-mode');
      } else {
        setIsDarkMode(false);
        document.body.classList.remove('dark-mode');
      }
    } else {
      // If no preference is stored, check system preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      
      if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        localStorage.setItem('darkMode', 'false');
      }
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only apply if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
        if (e.matches) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle scroll event to change header style
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

  // Toggle dark mode
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if a link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    closeMobileMenu();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      return; // Let the Link component handle the navigation
    }
    
    // If we're already on the home page, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" onClick={() => scrollToSection('hero')}>
            <h1>John<span>Doe</span></h1>
          </Link>
          
          <div className={`nav-content ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li>
                <a href="#hero" className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('hero');
                }}>Home</a>
              </li>
              <li>
                <a href="#about" className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('about');
                }}>About</a>
              </li>
              <li>
                <a href="#skills" className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('skills');
                }}>Skills</a>
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
                  to="/" 
                  className={`nav-link ${location.hash === '#projects' ? 'active' : ''}`}
                  onClick={() => scrollToSection('projects')}
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
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </div>
          </div>
          
          <div className="mobile-menu" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;