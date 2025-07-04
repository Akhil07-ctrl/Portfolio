import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">
          <p>
            Made with <span className="love">❤️</span> by Kundena Akhil
          </p>
          <div className="social-media-icons">
            <a
              href="https://www.linkedin.com/in/kundena-akhil-4b7073170/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Akhil07-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/akhil73602199"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:akhilkundena@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Kundena Akhil. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="https://yourdomain.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://yourdomain.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;