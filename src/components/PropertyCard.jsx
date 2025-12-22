import { Link }from 'react-router-dom';
import {FaHeart } from 'react-icons/fa';

function PropertyCard({ property }) {


const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
}).format(property.price);

return(
    <div className="property-card">
      <div className = "card-image-container">
        <img src = {property.picture} alt ={property.location} className ="card-image"/>

       
       <button className="favorite-button" title ="Add to Favorites">
        <FaHeart/>
         </button>
        </div>

        <div className="card-content">
            <div className="card-header">
                <span className="property-type">{property.type}</span>
                <span className="property-price">{formattedPrice}</span>
            </div>

            <h4 className =" card-location">{property.location}</h4>

            <p className="card-description">{property.description.subsctring(0,60)}...               
            </p>

            <div className="card-footer">
                <span className= "specs">{property.bedrooms} Beds </span>
            <Link to ={'/property/${property.id}'} className="view-details.btn">View Details
            </Link>
            </div>
        </div>
    </div>
);
}export default PropertyCard;
            
      



    

