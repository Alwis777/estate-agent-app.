import { useParams, Link } from 'react-router-dom';
import{useState} from 'react';
import { FaArrowLeft, FaBed, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import propertiesData from '../data/properties.json';
import './PropertyDetails.css';

function PropertyDetails() {
    const { id } = useParams();

    const property = propertiesData.properties.find(p => p.id === id);

    const [mainImage, setMainImage] = useState(property ? property.picture : null);

    if(!property) {
        return <div className="error-message"><h2>Property not found!</h2><Link to="/">Back to Search</Link></div>;
  }

  // Price formatter
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency', currency: 'GBP', minimumFractionDigits: 0
  }).format(property.price);

  return (
    <div className="property-details-container">
      <Link to="/" className="back-btn"><FaArrowLeft /> Back to Search</Link>

      <div className="details-grid">
        

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

          <p className="short-description">{property.description}</p>

          <button className="add-fav-btn">
            <FaHeart /> Add to Favorites
          </button>

        
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;