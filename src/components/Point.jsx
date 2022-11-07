import { Component } from "react";

export default class Point extends Component {
  constructor(index, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.05;
    this.cur = index;
    this.max = Math.random() * 100 + 50;
  }

  // update 함수를 실행하면 sin 함수 때문에 아래위로 움직임
  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
