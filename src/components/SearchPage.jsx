import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import SearchForm from './SearchForm';
import propertiesData from '../data/properties.json';
import './SearchPage.css';

function SearchPage({ addToFavorites, favorites = [] }) {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setProperties(propertiesData.properties);
    }, []);

    const handleSearch = (filters) => {
        const allProperties = propertiesData.properties;

        const filteredList = allProperties.filter(property => {
            const typeMatch = filters.type === 'any' || property.type === filters.type;
            const minPriceMatch = !filters.minPrice || property.price >= Number(filters.minPrice);
            const maxPriceMatch = !filters.maxPrice || property.price <= Number(filters.maxPrice);
            const bedMatch = !filters.minBedrooms || property.bedrooms >= Number(filters.minBedrooms);
            const postcodeMatch = !filters.postcode || property.location.toLowerCase().includes(filters.postcode.toLowerCase());

            return typeMatch && minPriceMatch && maxPriceMatch && bedMatch && postcodeMatch;
        });

        setProperties(filteredList);
    };

    return (
        <div className="search-page">
            <div className="search-header">
                <h2>Find Your Perfect Home</h2>
                <SearchForm onSearch={handleSearch} />
            </div>

            <div className="results-count">
                {properties.length === 0 
                    ? <p>No properties found. Try different filters.</p>
                    : <p>Showing {properties.length} properties</p>
                }
            </div>

            <div className="properties-grid">
                {properties.map((property) => (
                    <PropertyCard 
                        key={property.id} 
                        property={property}
                        onFavorite={addToFavorites}
                        
                        isFavorite={favorites.some(fav => fav.id === property.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;