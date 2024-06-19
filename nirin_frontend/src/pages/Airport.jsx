
import "./Airport.css";

const DestinationSelector = () => {
  return (
    <section className="destination-selector" id="airport">
      <div className="destination-background-image"></div>
      <div className="destination-content">
        <h2 className="destination-title">CHOOSE YOUR DESTINATION</h2>
        <div className="destination-buttons">
          <div className="destination-top-buttons">
            <button>MOSCOW</button>
            <button>NEW YORK</button>
            <button>HONG KONG</button>
          </div>
          <div className="destination-bottom-buttons">
            <button>DUBAI</button>
            <button>LONDON</button>
          </div>
        </div>
        
        <form>
          <div className="input-wrapper">
            <input type="text" placeholder="Enter your city or airport" />
            <button type="submit" className="btn-icon">
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
      </div>
    </section>
  );
};

export default DestinationSelector;
