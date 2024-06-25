import { createContext, useContext, useState } from "react";
import Modal from "react-modal";


const customStyles = {
  overlay: {
    zIndex: 1100,
    backgroundColor: "rgba(225, 225, 225, 0.9)",
  },
  content: {
    zIndex: 1110,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    padding: "20px",
    border: "none",
    borderRadius: "8px",
    width: "450px",
    // height: "597px",
    // display: 'dlex',
    // flex: '1',
  },
};

const LoginModal = ({ isOpen, onClose }) => {
  const handleLogin = () => {
    
    window.location.href = '/#greetings';   
    onClose();
  };



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      style={customStyles}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 50px 0",
        }}
      >
        <h2
          style={{
            color: "black",
            margin: "82px 0 0 0",
            fontFamily: "Cormorant",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          LOG INTO YOUR ACCOUNT
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username/Email"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "normal",
                fontSize: "14px",
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid transparent",
              }}
            />
            <svg
              width="348"
              height="3"
              viewBox="0 0 348 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.84668"
                y1="1.49811"
                x2="347.762"
                y2="1.49811"
                stroke="black"
                strokeWidth="1.5249"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "normal",
                fontSize: "14px",
                flex: "1",
                padding: "10px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid transparent",
              }}
            />

            <a
              href="#"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "normal",
                fontSize: "14px",
                marginLeft: "10px",
                textDecoration: "underline",
              }}
            >
              Forgot?
            </a>
          </div>
          <svg
            width="348"
            height="3"
            viewBox="0 0 348 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.84668"
              y1="1.49811"
              x2="347.762"
              y2="1.49811"
              stroke="black"
              strokeWidth="1.5249"
            />
          </svg>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <label
              style={{
                fontFamily: "Montserrat",
                fontWeight: "normal",
                fontSize: "10px",
                marginRight: "10px",
                marginTop: "16px",
              }}
            >
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember me
            </label>
          </div>
          <div
            style={{
              marginBottom: "20px",
              width: "100%",
              marginTop: "47px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              onClick={handleLogin}
              style={{
                fontFamily: "Cormorant",
                fontWeight: "bold",
                fontSize: "20px",
                width: "303px",
                height: "54px",
                padding: "15px 116px",
                cursor: "pointer",
                borderRadius: "31px",
              }}
            >
              LOG IN
            </button>
          </div>
        </form>
        <div
          style={{
            fontFamily: "Montserrat",
            fontWeight: "normal",
            fontSize: "14px",
            color: "black",
            alignSelf: "start",
            marginTop: "90px",
          }}
        >
          Don&lsquo;t have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </Modal>
  );
};

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  const openLoginModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const closeAllModals = () => {
    setActiveModal(null);
  };

  const isModalOpen = (modalType) => {
    return activeModal === modalType;
  };

  return (
    <ModalContext.Provider
      value={{ openLoginModal, closeModal, closeAllModals, isModalOpen }}
    >
      {children}
      <LoginModal isOpen={isModalOpen("login")} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
export default LoginModal;
