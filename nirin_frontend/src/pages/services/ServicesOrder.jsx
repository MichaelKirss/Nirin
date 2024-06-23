import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./services.css";

function ServicesOrder() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="services" className="servicesorder__section">
      <h2 className="services__title">OUR SERVICES</h2>
      <div className="services__photo-container">
        <div className="services__wrapper">
          <div className="services__photo services__photo1">
            <div
              className="services__overlay"
              style={{ bottom: "0", right: "0" }}
            >
              <p className="services__overlay-paragraph" style={{ marginLeft: "6%" }}>
                Our accompanying guides possess the necessary knowledge and
                experience to make your journey unforgettable and worry-free. We
                guarantee a personalized approach to each client and strive to
                ensure that your vacation is as comfortable and memorable as
                possible.
              </p>
            </div>
          </div>
          <button
            className="servicesorder-button1"
            onClick={() => openModal("./src/images/Rectangle_2.png")}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.546 9.304C21.6313 9.304 21.6953 9.47467 21.738 9.816C21.8233 10.1147 21.866 10.456 21.866 10.84C21.866 11.224 21.8233 11.5867 21.738 11.928C21.6953 12.2693 21.6313 12.44 21.546 12.44H12.522V21.4C12.522 21.4853 12.33 21.5707 11.946 21.656C11.562 21.6987 11.1567 21.72 10.73 21.72C9.834 21.72 9.386 21.656 9.386 21.528V12.44H0.426C0.340667 12.44 0.255333 12.2693 0.17 11.928C0.127333 11.5867 0.106 11.2027 0.106 10.776C0.106 10.392 0.127333 10.0507 0.17 9.752C0.212667 9.45333 0.276667 9.304 0.362 9.304H9.386V0.344C9.386 0.258666 9.55667 0.194666 9.898 0.151999C10.2393 0.066665 10.602 0.0239983 10.986 0.0239983C11.37 0.0239983 11.7113 0.066665 12.01 0.151999C12.3513 0.194666 12.522 0.258666 12.522 0.344V9.304H21.546Z"
                fill="white"
              />
            </svg>
          </button>
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
          <button
            className="servicesorder-button2"
            onClick={() => openModal("./src/images/Rectangle_3.png")}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.546 9.304C21.6313 9.304 21.6953 9.47467 21.738 9.816C21.8233 10.1147 21.866 10.456 21.866 10.84C21.866 11.224 21.8233 11.5867 21.738 11.928C21.6953 12.2693 21.6313 12.44 21.546 12.44H12.522V21.4C12.522 21.4853 12.33 21.5707 11.946 21.656C11.562 21.6987 11.1567 21.72 10.73 21.72C9.834 21.72 9.386 21.656 9.386 21.528V12.44H0.426C0.340667 12.44 0.255333 12.2693 0.17 11.928C0.127333 11.5867 0.106 11.2027 0.106 10.776C0.106 10.392 0.127333 10.0507 0.17 9.752C0.212667 9.45333 0.276667 9.304 0.362 9.304H9.386V0.344C9.386 0.258666 9.55667 0.194666 9.898 0.151999C10.2393 0.066665 10.602 0.0239983 10.986 0.0239983C11.37 0.0239983 11.7113 0.066665 12.01 0.151999C12.3513 0.194666 12.522 0.258666 12.522 0.344V9.304H21.546Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="services__wrapper">
          <div className="services__photo services__photo3">
            <div className="services__overlay">
              <p className="services__overlay-paragraph">
                We offer individual client support during travels to ensure
                comfort and safety throughout your vacation. Our professional
                guides and assistants are ready to provide you with full support
                throughout the journey.
              </p>
            </div>
          </div>
          <button
            className="servicesorder-button3"
            onClick={() => openModal("./src/images/Rectangle_1.png")}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.546 9.304C21.6313 9.304 21.6953 9.47467 21.738 9.816C21.8233 10.1147 21.866 10.456 21.866 10.84C21.866 11.224 21.8233 11.5867 21.738 11.928C21.6953 12.2693 21.6313 12.44 21.546 12.44H12.522V21.4C12.522 21.4853 12.33 21.5707 11.946 21.656C11.562 21.6987 11.1567 21.72 10.73 21.72C9.834 21.72 9.386 21.656 9.386 21.528V12.44H0.426C0.340667 12.44 0.255333 12.2693 0.17 11.928C0.127333 11.5867 0.106 11.2027 0.106 10.776C0.106 10.392 0.127333 10.0507 0.17 9.752C0.212667 9.45333 0.276667 9.304 0.362 9.304H9.386V0.344C9.386 0.258666 9.55667 0.194666 9.898 0.151999C10.2393 0.066665 10.602 0.0239983 10.986 0.0239983C11.37 0.0239983 11.7113 0.066665 12.01 0.151999C12.3513 0.194666 12.522 0.258666 12.522 0.344V9.304H21.546Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="servicesorders__modal"
        overlayClassName="servicesorders__modal-overlay"
        contentLabel="Modal"
      >
        <div className="servicesorders__modal-content">
          <img src={modalImage} alt="Service" />
          <div className="services__overlay_modal">
            <div className="services__overlay_content">
              <div className="circle">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L11 21L22 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Link to="/login" className="button-my-orders">
            MY ORDERS
          </Link>
        </div>
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M13.354 1.646a.5.5 0 0 0-.708 0L8 6.293 3.354 1.646a.5.5 0 1 0-.708.708L7.293 8l-4.647 4.646a.5.5 0 0 0 .708.708L8 9.707l4.646 4.647a.5.5 0 0 0 .708-.708L8.707 8l4.647-4.646a.5.5 0 0 0 0-.708z" />
          </svg>
        </button>
      </Modal>
    </section>
  );
}

export default ServicesOrder;
