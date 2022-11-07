import { Component } from "react";
import Point from "./Point";

export default class Wave extends Component {
  constructor(index, totalPoints, color) {
    super();
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    /* 중간을 각각 넓이, 높이를 2로 나눈 값 지정 */
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 1.2;

    /* 추가 : 각 점의 간격을 전체넓이 / 점개수 -1  */
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    /* 하나의 점 만들기 */
    // this.point = new Point(this.centerX, this.centerY);

    /* 추가 : 여러개의 점 */
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);
    ctx.fill();
    ctx.closePath();
  }
}
