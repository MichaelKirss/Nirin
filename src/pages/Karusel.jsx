import "./Karusel.css";

const DestinationSelector = () => {
  return (
    <section className="destination-selector" id="karusel">
      <div className="destination-background-image"></div>
      <div className="destination-content">
        <h2>Choose your destination</h2>
        <div className="destination-buttons">
          <div className="destination-top-buttons">
            <button>London</button>
            <button>Moscow</button>
            <button>Dubai</button>
          </div>
          <div className="destination-bottom-buttons">
            <button>Hong Kong</button>
            <button>New York</button>
          </div>
        </div>
        <input type="text" placeholder="Choose your city or airport" />
      </div>
    </section>
  );
};

export default DestinationSelector;
