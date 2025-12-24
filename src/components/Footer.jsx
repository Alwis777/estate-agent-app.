import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COL 1:BRAND N SOCIALS */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <FaHome className="footer-icon" />
            <span>EstateAgent</span>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/*COL 2: LINKS */}
        <div className="footer-col">
          <h4>Explore</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* COL 3 : CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-info">
            <p><FaPhone style={{marginRight:'8px'}}/> +1 (555) 123-4567</p>
            <p><FaEnvelope style={{marginRight:'8px'}}/> hello@estateagent.com</p>
            <p style={{marginTop:'10px', fontSize:'0.85rem', color:'#888'}}>123 Green Valley Rd, Eco District, NY</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT*/}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EstateAgent. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;