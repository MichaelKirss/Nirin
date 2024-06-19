import "./Homepage.css";
import Header from "../components/Header";
function Homepage() {
  return (
    
      <div className="home" id="homepage"> 
      <Header />    
      <div className="overlay">
        <div className="content-wrapper">
          <h1>MEET AND GREET</h1>
          <div className="wrapped-paragraph">
            <p>We provide VIP services at all airports in the world</p>
          </div>
          <button className="button">BOOK A CONSULTATION</button>
        </div>
      </div>
      <div className="overlay2"></div>
      <div className="overlay3"></div>
      <div className="overlay4"></div>
    </div>
  
  );
}
export default Homepage;
