import { Component } from "react";
import Wave from "./Wave";

export default class WaveGroup extends Component {
  constructor() {
    super();
    this.totalWaves = 3;
    this.totalPoints = 6;

    this.color = [
      "rgba(0,199,235,0.4",
      "rgba(0,146,199,0.4)",
      "rgba(0,87,158,0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }
  // 웨이브
  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
