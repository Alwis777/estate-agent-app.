import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';
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

       
        <main className="main-content" style={{ padding: '0', minHeight: '50vh' }}>
          <Routes>
            <Route 
              path="/" 
              element={<Home addToFavorites={addFavorite} favorites={favorites} />} 
            />


            <Route 
              path="/properties" 
              element={<SearchPage addToFavorites={addFavorite} favorites={favorites} />}/>

             <Route 
              path="/property/:id" 
              element={<PropertyDetails onAddToFavorites={addFavorite} favorites={favorites} />} 
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
            <Route 
              path="/contact" 
              element={
                <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                  <h2 style={{ color: '#6F8F6A' }}>Contact Us</h2>
                  <p>Our team is ready to help you find your dream home.</p>
                  <p>Email: hello@estateagent.com</p>
                </div>
              } 
            />
          </Routes>
        </main>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;