import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <HashLink to="/#home">Home</HashLink>
          </li>

          <li>
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#karusel">
              Karusel
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#howitworks">
              How it Works
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contacts">
              Contacts
            </HashLink>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="button">
            Login
          </Link>
          <Link to="/register" className="button">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
