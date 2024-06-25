import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router} from 'react-router-dom';
import App from "./App.jsx";
import { ModalProvider } from "./components/LoginModal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ModalProvider>
);
