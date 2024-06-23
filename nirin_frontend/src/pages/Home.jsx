import "./Home.css";
import Services from "./services/Services";
import Homepage from "./Homepage";
import Airport from "./Airport";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
    <div id="home">
      <Homepage />
      <Airport />      
      <Services />        
    </div>
    <Footer/>
    </>
  );
}

export default Home;
