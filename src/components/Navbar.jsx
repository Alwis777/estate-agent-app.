import {useState} from 'react';
import {Link,useLocation}from 'react-router-dom';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({favoritesCount = 0}){
    const location = useLocation();
    const [click,setClick]= useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return(
       <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <FaHome className="logo-icon" />
                     <span className = "logo-text">EstateAgent  </span> 
                </Link>
                {/* MOBILE MENU HAMBURGER*/}
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className= {click? 'nav-menu active' : 'nav-menu' }>
                    <li className="nav-item">
                        <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} 
                            onClick={closeMobileMenu}>
                        Home 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/properties" 
                            className={`nav-links ${location.pathname === '/properties' ? 'active' : ''}`}
                            onClick={closeMobileMenu}>
                             Properties
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/favorites" className={`nav-links favorites-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                            onClick={closeMobileMenu}>
                             Favorites
                            {favoritesCount > 0 && (
                                <span className="fav-badge">{favoritesCount}</span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
                             Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;