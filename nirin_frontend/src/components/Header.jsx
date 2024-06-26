import { HashLink } from "react-router-hash-link";
import Modal from "react-modal";
import { useModal } from "./LoginModal";
import "./header.css";

function Header() {
  const { openLoginModal, closeAllModals, isModalOpen } = useModal();
  const handleOpenLoginModal = () => {
    closeAllModals(); 
    openLoginModal("login"); 
  };

  return (
    <header className="App-header">
      <div className="logo">
        <h2>MEET AND GREET</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <HashLink smooth to="/#home" className="a">
              HOME
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#airport">
              AIRPORTS
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#services">
              SERVICES
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contacts">
              CONTACTS
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="language-dropdown">
        <svg
          className="custom-arrow"
          width="15"
          height="8"
          viewBox="0 0 17 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8 9L16 1"
            stroke="black"
            strokeLinecap="round"
            fill="#b78d5f"
          />
        </svg>
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>
      <button className="sign-in-button" onClick={handleOpenLoginModal}>
        LOG IN
      </button>
    </header>
  );
}

export default Header;
