import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
    <div className="nav-container">
        <nav className="navbar">
        <Link to="/" className="nav-link"></Link>
        <Link to="/home" className="nav-link">HOME</Link>
        <Link to="/appointments" className="nav-link">TURNOS</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        </nav>
    </div>
    );
};

export default NavBar;