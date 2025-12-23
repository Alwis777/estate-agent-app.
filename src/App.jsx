import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#e9e9e9ff' }}>
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

        <Footer/>
      </div>
    </Router>
  );
}

export default App;