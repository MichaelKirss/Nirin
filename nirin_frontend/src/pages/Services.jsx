
import AnimatedPlane from "./AnimatedPlane";
import "./services.css"; 
function Services() {
  return (
   
    <section id="services" className="services__section">
      <h2 className="services__title">OUR SERVICES</h2>
      <div className="services__photo-container">
        <div className="services__wrapper">
          <div className="services__photo services__photo1">
            <div className="services__overlay">
              <p style={{ marginLeft: "6%" }}>
                Наши сопровождающие гиды владеют необходимыми знаниями и опытом,
                чтобы сделать ваше путешествие незабываемым и беззаботным. Мы
                гарантируем индивидуальный подход к каждому клиенту и стремимся
                к тому, чтобы ваш отдых был максимально комфортным и
                запоминающимся.
              </p>
            </div>
          </div>
          <h2 className="services__service">BAGGAGE CLAIM</h2>
        </div>
        <div className="services__wrapper">
          <div className="services__photo services__photo2">
            <div className="services__overlay">
              <p>
                Наша цель - сделать ваше путешествие неповторимым, комфортным и
                беззаботным. Мы стремимся создать индивидуальный опыт для
                каждого клиента, независимо от их возраста, обеспечивая
                высочайший уровень сервиса и удовлетворения потребностей каждого
                члена вашей семьи или группы.
              </p>
            </div>
          </div>
          <h2 className="services__service">MEET & ASSIST</h2>
        </div>
        <div className="services__wrapper">
          <div className="services__photo services__photo3">
            <div className="services__overlay">
              <p>
                Мы предлагаем индивидуальное сопровождение клиентов во время
                путешествий для обеспечения комфорта и безопасности во время
                вашего отдыха. Наши профессиональные гиды и ассистенты готовы
                предоставить вам полную поддержку на протяжении всего
                путешествия.
              </p>
            </div>
          </div>
          <h2 className="services__service">FAST TRACK</h2>
        </div>
      </div>
      <AnimatedPlane/>
    </section>
      
    
  );
}

export default Services;
