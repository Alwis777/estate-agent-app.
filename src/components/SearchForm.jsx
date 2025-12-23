import './SearchForm.css';

function SearchForm({ onSearch }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const filters = {
            type: formData.get('type'),
            minPrice: formData.get('minPrice'),
            maxPrice: formData.get('maxPrice'),
            minBedrooms: formData.get('minBedrooms'),
            postcode: formData.get('postcode')

        };

        onSearch(filters);
    };

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <div className ="form-group">
                <label> Property Type</label>
                <select name="type">
                    <option value="">Any</option>
                    <option value="House">House</option>
                    <option value="Apartment">Flat</option>
                    </select>
            </div>

            <div className="form-group">
                <label> Min Price (£) </label>
                <input type="number" name="minPrice" placeholder="0"/>
            </div>

            <div className="form-group">
                <label> Max Price (£) </label>
                <input type="number" name="maxPrice" placeholder="Any"/>
            </div>

            <div className="form-group">
                <label> Min Bedrooms </label>
                <input type="number" name="minBedrooms" placeholder="Any"/>
            </div>

            <div className="form-group">
                <label> Postcode </label>
                <input type="text" name="postcode" placeholder="e.g. SW1A 1AA"/>
            </div>
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}
export default SearchForm;
