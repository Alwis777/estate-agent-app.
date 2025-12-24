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
                        <Link to="/" className="nav-links">
                            Search Properties
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-links favorites-link">
                            My Favorites
                            {favoritesCount > 0 && (
                                <span className="fav-badge">{favoritesCount}</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;