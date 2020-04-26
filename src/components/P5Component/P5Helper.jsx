import React, { Component } from "react";
import Sketch from "react-p5";

class P5Helper extends Component {
  angle = 0;
  boxWidth = 25;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(350, 350, p5.WEBGL).parent(canvasParentRef);
  };
  draw = (p5) => {
    const maxD = p5.dist(0, 0, 400, 400);
    const c1 = p5.color(255, 72, 128);
    const c2 = p5.color(50, 72, 128);
    p5.background(160);
    p5.ortho(-600, 600, -600, 600, -1000, 1000);
    p5.directionalLight(255, 255, 255, -1, 1, -1);

    p5.translate(0, 0, 20);
    const xfactor = p5.map(p5.mouseX, 0, p5.width, -0.5, 0.5);
    const yfactor = p5.map(p5.mouseY, 0, p5.height, 0.5, 1.5);

    p5.rotateX(-p5.QUARTER_PI * yfactor);
    p5.rotateY(p5.atan(1 / p5.sqrt(2)) * xfactor);

    p5.rectMode(p5.CENTER);
    let offset = 0;

    for (let z = 0; z < 2 * p5.height; z += this.boxWidth) {
      for (let x = 0; x < 2 * p5.width; x +=this.boxWidth) {
        p5.push();
        let d = p5.dist(x, z, p5.width, p5.height);
        let offset = p5.map(d, 0, maxD, -5, 5);
        let a = this.angle + offset;
        let boxHeight = p5.map(p5.sin(a), 1, -1, 10, 600);
        let inter = p5.map(p5.sin(a), 1, -1, 0, 0.75);
        let c = p5.lerpColor(c1, c2, inter);
        p5.ambientMaterial(c);
        p5.noStroke();
        p5.translate(x - p5.width, 0, z - p5.height);
        p5.box(this.boxWidth, boxHeight, this.boxWidth);
        //(x - width / 2, 0, 10, h);
        p5.pop();
      }
    }
    this.angle -= 0.15;
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

export default P5Helper;
