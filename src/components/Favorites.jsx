import PropertyCard from './PropertyCard';
import './Favorites.css';

function Favorites({ favorites, onRemove, onClear }) {
    return (
       <div className="favorites-page">
        <div className="favorites-header">
            <h2>My Saved Properties</h2>

            {favorites.length > 0 && (
                <button className="clear-favourites-btn" onClick={onClear}>
                    Clear All Favorites
                </button>
            )}
        </div>

        {favorites.length === 0 ? (
        <div className="empty-state">
            <h3>You haven't saved any properties yet.</h3>
            <p>Go back to the search page to find your dream home!</p>
        </div>
      ) : (
        <div className="favorites-grid">
            {favorites.map((property) => (
            <div key={property.id} className="fav-card-wrapper">
                
                <PropertyCard 
                    property={property} 
                    isFavorite={true} 
                    onFavorite={() => {}} 
                />

                <button className="remove-btn"
                    onClick={() => onRemove(property.id)}
                >
                    Remove from List
                </button>
            </div>
            ))}
        </div>
      )}
        </div>
    );
}

export default Favorites;