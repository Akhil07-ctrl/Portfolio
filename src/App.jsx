import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Resume from './components/Resume';

import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [footerReached, setFooterReached] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show scroll-to-top when user reaches footer or scrolls more than 300px
        if (footerTop <= windowHeight || window.scrollY > 300) {
          setShowScrollTop(true);
          setFooterReached(footerTop <= windowHeight);
        } else {
          setShowScrollTop(false);
          setFooterReached(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />

        {showScrollTop && (
          <button
            className={`scroll-to-top ${footerReached ? 'footer-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;