import "./App.css";
import Canvas from "./components/Canvas";

const BASE_CANVAS_HEIGHT = 400;
const HOUSE_SIZE = 85;
const DOOR_DIMENSIONS = {
  width: 50,
  height: 75,
};

const WINDOW_SIZE = 40;

function App() {
  const drawArt = (context) => {
    // sky
    context.fillStyle = "blue";
    context.fillRect(0, 0, window.innerWidth, BASE_CANVAS_HEIGHT / 2);

    //grass
    context.fillStyle = "#72db1b";
    context.fillRect(
      0,
      BASE_CANVAS_HEIGHT / 2,
      window.innerWidth,
      BASE_CANVAS_HEIGHT / 2
    );

    //house_base
    context.fillStyle = "#5a3505";
    const centerPoint = {
      x: window.innerWidth / 2,
      y: BASE_CANVAS_HEIGHT / 2,
    };

    const houseBaseLeftTop = {
      x: centerPoint.x - HOUSE_SIZE,
      y: centerPoint.y - HOUSE_SIZE,
    };

    context.fillRect(
      houseBaseLeftTop.x,
      houseBaseLeftTop.y,
      HOUSE_SIZE * 2,
      HOUSE_SIZE * 2
    );

    // doors
    context.fillStyle = "#dd6d41";
    context.fillRect(
      centerPoint.x - 25,
      BASE_CANVAS_HEIGHT / 2,
      DOOR_DIMENSIONS.width,
      DOOR_DIMENSIONS.height
    );

    // windows
    context.fillStyle = "#add";
    context.fillRect(
      centerPoint.x - 70,
      centerPoint.y - 60,
      WINDOW_SIZE,
      WINDOW_SIZE
    );

    context.fillRect(
      centerPoint.x + 30,
      centerPoint.y - 60,
      WINDOW_SIZE,
      WINDOW_SIZE
    );
  };

  const drawExample = (context) => {
    context.fillStyle = "rgba(255, 0, 0, 0.637)";
    context.fillRect(20, 20, 100, 120);

    context.fillStyle = "#00ff003b";
    context.fillRect(90, 95, 100, 100);
  };

  return (
    <div className='App'>
      <h1>Example</h1>
      <Canvas
        draw={drawExample}
        width={window.innerWidth}
        height={BASE_CANVAS_HEIGHT}
      />
      <h1>Art</h1>
      <Canvas
        draw={drawArt}
        width={window.innerWidth}
        height={BASE_CANVAS_HEIGHT}
      />
    </div>
  );
}

export default App;
