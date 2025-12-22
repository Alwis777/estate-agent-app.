import {Link}from 'react-router-dom';
import '/Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">Estate Agent</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Search Properties</Link>
                <Link to="/favorites">My Favorites</Link>
            </div>
        </nav>
    )
}
export default Navbar;