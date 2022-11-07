import React, { useRef, useEffect, useState } from "react";
import WaveGroup from "./WaveGroup";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const waveGroup = new WaveGroup();

  let stageWidth = window.innerWidth;
  let stageHeight = window.innerHeight;

  const draw = (frameCount) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    context.fill();
  };

  useEffect(() => {
    //i.e. value other than null or undefined
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      let stageWidth = window.innerWidth;
      let stageHeight = window.innerHeight;

      const resize = () => {
        const ratio = window.devicePixelRatio;

        stageWidth = window.innerWidth;
        stageHeight = window.innerHeight;

        canvas.width = stageWidth * ratio;
        canvas.height = stageHeight * ratio;

        canvas.style.width = stageWidth + "px";
        canvas.style.height = stageHeight + "px";
        canvas.style.position = "absolute";
        document.body.style.margin = "0";

        ctx.scale(ratio, ratio);
        window.addEventListener("resize", resize);
      };

      let frameCount = 0;
      let animationFrameId;

      // Check if null context has been replaced on component mount
      if (context) {
        //Our draw came here
        const render = () => {
          frameCount++;
          draw(frameCount);

          animationFrameId = window.requestAnimationFrame(render);
        };
        render();
      }
      resize();
      return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
