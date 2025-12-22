import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from'./components/SearchPage';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
        <Navbar />
        
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
          <Routes>
            <Route path="/" element={<SearchPage />} />

        
            <Route path="/property/:id" element={<h1>Property Details (Coming Soon)</h1>} />
            <Route path="/favorites" element={<h1>Favorites Page (Coming Soon)</h1>} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;