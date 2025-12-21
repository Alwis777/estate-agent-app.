import { Link }from 'react-router-dom';
import {FaHeart } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-image">
                <img src={property.image} alt={property.title} />
            </div>
            <div className="property-details">
                <h2>{property.title}</h2>
                <p>{property.description}</p>
                <span className="property-price">${property.price}</span>
                <Link to={`/properties/${property.id}`} className="view-details">
                    View Details
                </Link>
                <button className="favorite-button">
                    <FaHeart />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;