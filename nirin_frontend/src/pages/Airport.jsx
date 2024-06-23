
import SearchComponent from './SearchComponent'
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
        <SearchComponent/>
       
      </div>
    </section>
  );
};

export default DestinationSelector;
