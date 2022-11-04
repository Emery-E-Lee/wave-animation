import "./App.css";
import Canvas from "./components/Canvas";

function App() {
  const drawArt = (context) => {
    context.fillStyle = "blue";
    context.fillRect(0, 0, 100, 120);
    context.strokeRect(100, 120, 50, 50);
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
      <Canvas draw={drawExample} width={window.innerWidth} height={600} />
      <h1>Art</h1>
      <Canvas draw={drawArt} width={window.innerWidth} height={400} />
    </div>
  );
}

export default App;
