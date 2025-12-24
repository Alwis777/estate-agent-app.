import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer'; 
import SearchPage from './components/SearchPage';
import PropertyDetails from './components/PropertyDetails';
import Favorites from './components/Favorites';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    if (favorites.some(fav => fav.id === property.id)) {
      alert("This property is already in your favorites!");
      return;
    }
    const newList = [...favorites, property];
    setFavorites(newList);
    alert("Property added to favorites! ❤️");
  };

  const removeFavorite = (id) => {
    const updatedList = favorites.filter(item => item.id !== id);
    setFavorites(updatedList);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <Router>
      <div className="app-container">
        
        <Hero favoritesCount={favorites.length} />

       
        <main className="main-content" style={{ padding: '40px 20px', minHeight: '50vh' }}>
          <Routes>
            <Route 
              path="/" 
              element={<SearchPage addToFavorites={addFavorite} favorites={favorites} />} 
            />

            <Route 
              path="/property/:id" 
              element={<PropertyDetails onAddToFavorites={addFavorite} />} 
            />
            
            <Route 
              path="/favorites" 
              element={
                <Favorites 
                  favorites={favorites} 
                  onRemove={removeFavorite}
                  onClear={clearFavorites}
                />
              } 
            />
          </Routes>
        </main>

        {/* 3. FOOTER */}
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;