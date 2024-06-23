import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Airport from "./pages/Airport";
import Services from "./pages/services/Services";
import ServicesOrder from "./pages/services/ServicesOrder";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import LoggedIn from "./pages/LoggedIn";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airport" element={<Airport />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicesorder" element={<ServicesOrder />} />
            <Route path="/contacts" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loggedin" element={<LoggedIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
