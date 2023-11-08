import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
    return (
      <footer className="footer-section">
        <div className="social-media-links">
          <a href="social-media-link-1" target="_blank" rel="noopener noreferrer">Social Media 1</a>
          <a href="social-media-link-2" target="_blank" rel="noopener noreferrer">Social Media 2</a>
        </div>
        <div className="footer-links">
          <a href="terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          <a href="privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="copyright-info" target="_blank" rel="noopener noreferrer">Copyright Information</a>
        </div>
        <button className="back-to-top" onClick={() => scroll.scrollToTop()}>Back to Top</button>
      </footer>
    );
  }