import { Component } from "react";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

class App extends Component {
  render() {
    const BASE_CANVAS_HEIGHT = 400;
    const drawArt = (context) => {};
    return (
      <div className='App'>
        <h1>Example</h1>
        <Canvas />
        <h1>Art</h1>
      </div>
    );
  }
}

export default App;
