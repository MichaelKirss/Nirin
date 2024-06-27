import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import "./Airport.css";
// "https://45.131.41.66:8443/api/v1/airports/search"
//  "https://45.131.41.66:8443/api/v1/airports/services"
// https://nirin.venetsbank.ru:8443/api/v1/airports/search?search=
// "https://nirin.venetsbank.ru:8443/api/v1/airports/services"

Modal.setAppElement("#root");

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(true);
  const [services, setServices] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://45.131.41.66:8443/api/v1/airports/search",
        {
          params: { q: query },
        }
      );
      console.log(response.data);
      if (Array.isArray(response.data.results)) {
        const result = response.data.results.find(
          (result) => result.title.toLowerCase() === query.toLowerCase()
        );
        if (result) {
          setSearchResult(result);
          setModalIsOpen(true);
          console.log(result);
        } else {
          setSearchResult(null);
          setModalIsOpen(false);
          console.log("Нет результатов");
        }
      } else {
        setError("Некорректный формат данных");
      }
      setQuery("");
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Ошибка при выполнении поиска");
    }
  };

  const handleServicesClick = async () => {
    setShowServices(false);
    try {
      const response = await axios.get(
        "https://45.131.41.66:8443/api/v1/airports/services"
      );
      console.log(response.data);
      setServices(response.data.results);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setShowServices(true);
    setServices([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="search__input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter your airport"
            className="search__input-text"
          />
          <button className="search__btn-icon" type="submit">
            <svg
              width="42"
              height="46"
              viewBox="0 0 42 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16.5"
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
              <path d="M29 32L40 45" stroke="black" strokeWidth="3" />
            </svg>
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Результат поиска"
        className="search__Content"
        overlayClassName="search__Overlay"
      >
        <button onClick={closeModal} className="search__close-button">
          ×
        </button>
        {searchResult ? (
          <div className="search__result-container">
            <p className="search__result-title">
              {searchResult.title} ({searchResult.code_iata}/
              {searchResult.code_icao})
            </p>
            <p className="search__result-location">
              {searchResult.city}, {searchResult.country}
            </p>

            {showServices && (
              <>
                <button
                  onClick={handleServicesClick}
                  className="search__services-button"
                >
                  services vary by location
                </button>
                <p className="search__result-description">
                  We offer personalised travel assistance to ensure your comfort
                  and safety during your holiday. Our professional guides and
                  assistants are ready to provide you with full support
                  throughout your journey.
                </p>
              </>
            )}
            {!showServices && services.length > 0 && (
              <div className="services-wrapper">
                {services.map((service) => (
                  <div key={service.id} className="service-item">
                    <Link to={`/servicesorder`} className="service-link">
                      {service.kind_service}
                    </Link>
                    <svg
                      className="line-svg"
                      width="396"
                      height="1"
                      viewBox="0 0 396 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="0.5" x2="396" y2="0.5" stroke="#B78D5F" />
                    </svg>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p>Нет результатов</p>
        )}
      </Modal>
    </div>
  );
};

export default SearchComponent;
