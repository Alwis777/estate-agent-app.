import Navbar from './Navbar';
import './Hero.css';

function Hero({ favoritesCount }) {
  return (
    <div className="hero-container">
      <div className="hero-bg"></div>
       
       {/* The Dark Glass Overlay */}
      <div className="hero-overlay"></div>
       {/* The Navbar sits ON TOP of the hero */}
      <div className="hero-nav-wrapper">
        <Navbar favoritesCount={favoritesCount} />
      </div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1>Find Your Perfect Home <br /> with Confidence</h1>
        <p>Explore premium listings with trusted guidance.</p>
      </div>
    </div>
  );
}

export default Hero;

