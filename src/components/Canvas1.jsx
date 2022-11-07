import React, { Component } from "react";
import WaveGroup from "./WaveGroup";

export default class Canvas1 extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.waveGroup = new WaveGroup();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  componentDidUpdate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
  }

  animate(t) {
    // 캔버스 클리어
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    window.onload = () => {
      new Canvas1();
    };
    return <canvas ref={this.canvasRef}></canvas>;
  }
}
