import "./Home.css";
import Services from "./Services";
import About from "./About";
import Contacts from "./Contacts";
import Homepage from "./Homepage";
import Karusel from "./Karusel";
import HowItWorks from "./HowItWorks";

function Home() {
  return (
    <div id="home">
      <Homepage />
      <Karusel />
      <HowItWorks/>
      <Services />
      <About />
      <Contacts />
    </div>
  );
}

export default Home;
