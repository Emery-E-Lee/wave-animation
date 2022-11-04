import React, { useEffect, useRef } from "react";

const Canvas = ({ draw, ...props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    draw(context);
  }, [draw]);

  return (
    <>
      <canvas width={props.width} height={props.height} ref={canvasRef} />;
    </>
  );
};

export default Canvas;
