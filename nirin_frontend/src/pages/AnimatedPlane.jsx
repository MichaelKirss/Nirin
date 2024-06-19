import{ useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./AnimatedPlane.css";

const AnimatedPlane = () => {
  const startPoint = { x: 120, y: 290 };
  const endPoint = { x: 400, y: 400 };
  const angleDegOffset = -10;
  const planeDimensions = { width: 72, height: 72 };

  const distance = calculateDistance(startPoint, endPoint);
  const thirdPoint = calculateThirdPoint(endPoint, distance);
  const fourthPoint = calculateFourthPoint(thirdPoint, distance);
  const fourthLineEnd = calculateFourthLineEnd(fourthPoint, Math.PI / 6, distance);

  const [currentPoint, setCurrentPoint] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [angleDeg, setAngleDeg] = useState(angleDegOffset);

  const [{ xy }, api] = useSpring(() => ({
    xy: [startPoint.x - planeDimensions.width / 2, startPoint.y - planeDimensions.height / 2],
    config: { duration: 2000 },
    onRest: () => setIsAnimating(false)
  }));

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (event.deltaY > 0 && currentPoint < 3 && !isAnimating) {
        setIsAnimating(true);
        setCurrentPoint(prevPoint => {
          const nextPoint = prevPoint + 1;
          const [currentX, currentY] = [points[prevPoint].x, points[prevPoint].y];
          const [nextX, nextY] = [points[nextPoint].x, points[nextPoint].y];
          let angle = calculateAngle(currentX, currentY, nextX, nextY) - 15;

          setAngleDeg(angle - 5); 
          api.start({ xy: [nextX - planeDimensions.width / 2, nextY - planeDimensions.height / 2] });
          return nextPoint;
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentPoint, isAnimating, api]);

  const points = [startPoint, endPoint, thirdPoint, fourthPoint];

  const handleSvgClick = () => {
    setCurrentPoint(0); 
    setAngleDeg(angleDegOffset);
    api.start({ xy: [startPoint.x - planeDimensions.width / 2, startPoint.y - planeDimensions.height / 2] });
  };

  return (
    <div className="dark-background">
      <h2 className="animated-title">WAY TO YOUR COMFORT</h2>
      <div className="container">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="svg-background" onClick={handleSvgClick}>
          <text x={startPoint.x} y={startPoint.y - 60} className="text">DESTINATION</text>
          <text x={endPoint.x} y={endPoint.y + 60} className="text">CHOICE OF SERVICES</text>
          <text x={thirdPoint.x + 150} y={thirdPoint.y} className="text">SEND REQUEST</text>
          <text x={fourthPoint.x} y={fourthPoint.y + 60} className="text">MANAGER&apos;S CALL</text>
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="11.5344" className="circle" />
          ))}
          <line x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y} className="line" />
          <line x1={endPoint.x} y1={endPoint.y} x2={thirdPoint.x} y2={thirdPoint.y} className="line" />
          <line x1={thirdPoint.x} y1={thirdPoint.y} x2={fourthPoint.x} y2={fourthPoint.y} className="line" />
          <line x1={fourthPoint.x} y1={fourthPoint.y} x2={fourthLineEnd.x} y2={fourthLineEnd.y} className="line" />
          <animated.g style={{ transform: xy.to((x, y) => `translate(${x}px, ${y}px) rotate(${angleDeg}deg)`) }}>
            <path d="M51.1573 33.9182C51.1573 33.9182 68.7302 38.2341 72.1049 42.4395C73.0236 43.5844 71.7789 45.4192 70.3539 45.7582C64.1097 47.2434 49.7239 42.8541 49.7239 42.8541L23.6057 66.2676L19.3621 64.4967L34.1735 38.5104L14.2183 33.827L3.5882 42.2422L0.394673 40.6903L7.20625 30.5062C7.20625 30.5062 4.07529 29.0583 2.7012 27.8299C1.95874 27.1661 2.05099 25.5264 3.01914 25.3014C4.94129 24.8548 8.51586 24.3362 8.51586 24.3362L7.32153 12.5876L11.003 13.7755L15.0323 24.8768L36.182 29.104L36.1549 0.717263L40.4493 1.74936L51.1573 33.9182Z" className="plane" />
          </animated.g>
        </svg>
      </div>
    </div>
  );
}

const calculateDistance = (point1, point2) => {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

const calculateThirdPoint = (endPoint, distance) => {
  return {
    x: endPoint.x + distance * Math.cos(Math.PI / 4),
    y: endPoint.y - distance * Math.sin(Math.PI / 4) + 20
  };
};

const calculateFourthPoint = (thirdPoint, distance) => {
  return {
    x: thirdPoint.x + 2 * distance * Math.cos(Math.PI / 4) + 20,
    y: thirdPoint.y + 2 * distance * Math.sin(Math.PI / 4) - 20
  };
};

const calculateFourthLineEnd = (fourthPoint, angle, distance) => {
  return {
    x: fourthPoint.x + distance * Math.cos(angle),
    y: fourthPoint.y - distance * Math.sin(angle)
  };
};

const calculateAngle = (x1, y1, x2, y2) => {
  return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
};

export default AnimatedPlane;
