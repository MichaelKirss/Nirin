import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Airport from "./pages/Airport";
import Services from "./pages/services/Services";
import ServicesOrder from "./pages/services/ServicesOrder";
import Footer from "./components/Footer";
import Greetings from "./pages/personalAccaunt/Greetings";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airport" element={<Airport />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesorder" element={<ServicesOrder />} />
          <Route path="/contacts" element={<Footer />} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
