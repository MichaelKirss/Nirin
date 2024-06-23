import AnimatedPlane from "../AnimatedPlane";
import "./services.css";
function Services() {
  return (
    <section id="services" className="services__section">
      <h2 className="services__title">OUR SERVICES</h2>
      <div className="services__photo-container">
        <div className="services__wrapper">
          <div className="services__photo services__photo1">
            <div className="services__overlay">
              <p className="services__overlay-paragraph" style={{ marginLeft: "6%" }}>
                Our accompanying guides possess the necessary knowledge and
                experience to make your journey unforgettable and worry-free. We
                guarantee a personalized approach to each client and strive to
                ensure that your vacation is as comfortable and memorable as
                possible.
              </p>
            </div>
          </div>
          <h2 className="services__service">BAGGAGE CLAIM</h2>
        </div>
        <div className="services__wrapper">
          <div className="services__photo services__photo2">
            <div className="services__overlay">
              <p className="services__overlay-paragraph">
                Our goal is to make your journey unique, comfortable, and
                carefree. We aim to create a personalized experience for each
                client, regardless of their age, providing the highest level of
                service and meeting the needs of every member of your family or
                group.
              </p>
            </div>
          </div>
          <h2 className="services__service">MEET & ASSIST</h2>
        </div>
        <div className="services__wrapper">
          <div className="services__photo services__photo3">
            <div className="services__overlay">
              <p className="services__overlay-paragraph">
                We offer individual client support during travels to ensure
                comfort and safety throughout your vacation. Our professional
                guides and assistants are ready to provide you with full support
                throughout the journey.{" "}
              </p>
            </div>
          </div>
          <h2 className="services__service">FAST TRACK</h2>
        </div>
      </div>
      <AnimatedPlane />
    </section>
  );
}

export default Services;
