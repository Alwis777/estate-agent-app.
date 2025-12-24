import { Link } from 'react-router-dom';
import { FaUserShield, FaBolt, FaAward, FaHandHoldingHeart } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import propertiesData from '../data/properties.json'; 
import './Home.css';
import { FaHand } from 'react-icons/fa6';

function Home({ addToFavorites, favorites=[] }) {

    const featuredProperties = propertiesData.properties.slice(0, 3);

    return(
        <div className="home-container">

            /*ABOUT SECTION*/
            <section className="about-section">
                <div classNmae="about-content">
                    <h5 className="sub-heading">WHO WE ARE</h5>
                    <h2>Elavating Every Step of Your Jounrney</h2>
                    <p>We combine advanced market data with a curated selection of properties to help you find a home that fits your lifestyle.
                        From smart filtering tools to immersive property insights, we streamline the complex process of buying and selling.
                        Experience a platform designed for the modern homeowner—where technology clarifies your search and sustainability defines your future.</p>
                </div>
            </section>

        /* 2. FEATURES SECTION */
      <section className="features-section">
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card glass-panel">
            <div className="icon-box">
              <FaUserShield />
            </div>
            <h3>Trusted Agents</h3>
            <p>Local experts who guide every step with total transparency.</p>
          </div>

          /* Feature 2 */
          <div className="feature-card glass-panel">
            <div className="icon-box">
              <FaHandHoldingHeart />
            </div>
            <h3>Tailored Services</h3>
            <p>Whether buying, selling, or renting, we adapt to you.</p>
          </div>

          /* Feature 3 */
          <div className="feature-card glass-panel">
            <div className="icon-box">
              <FaBolt />
            </div>
            <h3>Fast Process</h3>
            <p>From viewing to closing, our tech keeps it quick.</p>
          </div>

           /* Feature 4 */
           <div className="feature-card glass-panel">
            <div className="icon-box">
              <FaAward />
            </div>
            <h3>Award Winning</h3>
            <p>Recognized for excellence in eco-friendly real estate.</p>
          </div>
        </div>
      </section>

      /* 3. EXCLUSIVE PROPERTIES TEASER */
      <section className="featured-listings">
        <div className="section-header">
          <h2>Exclusive Properties You'll Love</h2>
          <Link to="/properties" className="view-all-link">View All Properties →</Link>
        </div>

        <div className="home-properties-grid">
          {featuredProperties.map(property => (
            <PropertyCard 
               key={property.id} 
               property={property}
               onFavorite={addToFavorites}
               isFavorite={favorites.some(fav => fav.id === property.id)}
            />
          ))}
        </div>
      </section>

      /* 4. CALL TO ACTION */
      <section className="cta-section">
        <h2>Ready to find your dream home?</h2>
        <Link to="/contact" className="cta-btn">Contact Us Today</Link>
      </section>

    </div>
  );
}
export default Home;