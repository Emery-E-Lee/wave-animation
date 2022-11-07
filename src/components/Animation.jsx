import { Component } from "react";
import Canvas from "./Canvas";

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    this.setState((prevState) => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    return <Canvas angle={this.state.angle} />;
  }
}