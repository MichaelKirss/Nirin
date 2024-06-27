import "./Homepage.css";
import Header from "../components/Header";
function Homepage() {
  return (
    <>
    {/* <Header/> */}
    <div className="home" id="homepage">
      <Header />
      <div className="homepage__overlay">
        <div className="homepage__content-wrapper">
          <h1 className="homepage__title">MEET AND GREET</h1>
          <div className="homepage__wrapped-paragraph">
            <p className="homepage__paragraph">We provide VIP services at all airports in the world</p>
          </div>
          <button className="homepage__button">BOOK A CONSULTATION</button>
        </div>
      </div>
      <div className="homepage__overlay2"></div>
      <div className="homepage__overlay3"></div>
      <div className="homepage__overlay4"></div>
    </div>
    </>
  );
}
export default Homepage;
