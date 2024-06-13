import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link"></Link>
            <Link to="/home" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/appointments"
              className={`nav-link ${!user ? "disabled-link" : ""}`}
              onClick={(event) => !user && event.preventDefault()}
            >
              TURNOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              LOGOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
