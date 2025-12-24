import {Link,useLocation}from 'react-router-dom';
import { FaHome, FaHeart } from 'react-icons/fa';
import './Navbar.css';

function Navbar({favoritesCount = 0}){
    const location = useLocation();
    return(
       <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <FaHome className="logo-icon" />
                    EstateAgent
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}>
                        Home 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/" 
                            className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
                        >
                             Properties
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/favorites" className={`nav-links favorites-link ${location.pathname === '/favorites' ? 'active' : ''}`}>
                             Favorites
                            {favoritesCount > 0 && (
                                <span className="fav-badge">{favoritesCount}</span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}>
                             Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;