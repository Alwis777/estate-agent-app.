import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft, FaBed, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import propertiesData from '../data/properties.json';
import './PropertyDetails.css'; 

function PropertyDetails() {
  const { id } = useParams();
  const property = propertiesData.properties.find(p => p.id === id);

  // State for the gallery
  const [mainImage, setMainImage] = useState(property ? property.picture : null);
  
  // State for the Tabs (Default to 'desc')
  const [activeTab, setActiveTab] = useState('desc');

  if (!property) {
    return (
      <div className="error-message">
        <h2>Property not found!</h2>
        <Link to="/">Back to Search</Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency', currency: 'GBP', minimumFractionDigits: 0
  }).format(property.price);

  return (
    <div className="property-details-container">
      <Link to="/" className="back-btn"><FaArrowLeft /> Back to Search</Link>

      <div className="details-grid">
        
        {/* LEFT COLUMN: Gallery */}
        <div className="gallery-section">
          <div className="main-image-frame">
            <img src={mainImage} alt={property.location} className="main-image" />
          </div>
          <div className="thumbnail-grid">
            {property.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index}`} 
                className={mainImage === img ? "thumbnail active" : "thumbnail"} 
                onClick={() => setMainImage(img)} 
              />
            ))}
          </div>
        </div>

     
        <div className="info-section">
          <div className="title-header">
            <div>
              <span className="badge">{property.type}</span>
              {property.tenure && <span className="badge tenure">{property.tenure}</span>}
            </div>
            <h1>{property.location}</h1>
            <h2 className="price-tag">{formattedPrice}</h2>
          </div>

          <div className="key-features">
            <div className="feature">
              <FaBed /> <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="feature">
              <FaMapMarkerAlt /> <span>{property.location}</span>
            </div>
          </div>

          <button className="add-fav-btn">
            <FaHeart /> Add to Favorites
          </button>

          {/* --- TABS SECTION --- */}
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'desc' ? 'active' : ''}`} 
                onClick={() => setActiveTab('desc')}
              >
                Description
              </button>
              <button 
                className={`tab-btn ${activeTab === 'floorplan' ? 'active' : ''}`} 
                onClick={() => setActiveTab('floorplan')}
              >
                Floor Plan
              </button>
              <button 
                className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`} 
                onClick={() => setActiveTab('map')}
              >
                Map
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'desc' && (
                <div className="description-tab">
                  <h3>Property Description</h3>
                  <p>{property.description}</p>
                </div>
              )}

              {activeTab === 'floorplan' && (
                <div className="floorplan-tab">
                  <div className="placeholder-box">
                    <p>📏 Floor Plan Placeholder</p>
                  </div>
                </div>
              )}

              {activeTab === 'map' && (
                <div className="map-tab">
                   <iframe 
                     width="100%" 
                     height="300" 
                     style={{border:0, borderRadius: '8px'}} 
                     loading="lazy" 
                     allowFullScreen
                     referrerPolicy="no-referrer-when-downgrade"
                     src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}>
                   </iframe>
                </div>
              )}
            </div>
          </div>
        

        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;