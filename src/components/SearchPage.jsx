import PropertyCard from './PropertyCard';
import propertiesData from '../data/properties.json';
import './SearchPage.css';

function SearchPage() {
    const properties = propertiesData.properties;

    return (
        <div className="search-page">
            <div className="search-header">
                <h2>Find Your Perfect Home</h2>
            </div>
            <div className="properties-grid">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;