import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from'./components/SearchPage';
import PropertyDetails from './components/PropertyDetails';

function App() {
  const [Favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
       if (Favourites.some(fav => fav.id === property.id)) {
      alert("This property is already in your favorites!");
      return;
    }
    
    const newList= [...Favourites, property];
    setFavourites(newList);
    alert("Property added to favorites!❤️");
  };

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
        <Navbar />
        
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#e9e9e9ff' }}>
          <Routes>
         <Route  path="/" element={<SearchPage addToFavorites={addFavorite} favorites={favorites} />} 
      />


            <Route path="/property/:id" element={<PropertyDetails onAddToFavorites={addFavourite} />} />
            <Route path="/favorites" element={<h1>Favorites Page (Coming Soon)</h1>} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;