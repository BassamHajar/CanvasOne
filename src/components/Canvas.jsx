import React, { useState, useEffect, useRef } from "react";

const Canvas = () => {
  // ====================== states ======================
  const [canvasSize, setCanvasSize] = useState({
    canvasWidth: 800,
    canvasHeight: 600
  });
  const [hexSize, setHexSize] = useState(20);
  const [hexOrigin, setHexOrigin] = useState({ x: 300, y: 300 });
  const [hexParameters, setHexParameters] = useState({});
  console.log("state hexParameters", hexParameters);

  // UseRef()
  const canvasHex = useRef();

  // ====================== UseEffect ======================
  useEffect(() => {
    canvasHex.current.width = canvasSize.canvasWidth;
    canvasHex.current.height = canvasSize.canvasHeight;
    getHexParameters();
    drawHexes();
  }, []);

  // ====================== Methods ======================
  const drawHexes = async () => {
    console.log("hexParameters in drawHexes", hexParameters);
    const { hexWidth } = hexParameters;
    console.log("hexWidth", hexWidth);
    let qLeftSide = Math.round(hexOrigin.x / hexWidth);
    let qRightSide = Math.round(canvasHex.width - hexOrigin.x / hexWidth);
    for (let r = -4; r <= 4; r++) {
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        let center = hexToPixel({ q, r });
        drawHex(canvasHex, center);
        drawHexCoordinates(canvasHex, center, { q, r });
      }
    }
  };

  const getHexCornerCoord = (center, i) => {
    const angle_deg = 60 * i - 30;
    const angle_rad = (Math.PI / 180) * angle_deg;
    const x = center.x + hexSize * Math.cos(angle_rad);
    const y = center.y + hexSize * Math.sin(angle_rad);
    return { x, y };
  };

  const getHexParameters = () => {
    const hexHeight = hexSize * 2;
    const hexWidth = (Math.sqrt(3) / 2) * hexHeight;
    const vertDist = (hexHeight * 3) / 4;
    const horizDist = hexWidth;
    setHexParameters({ hexWidth, hexHeight, vertDist, horizDist });
  };

  const hexToPixel = h => {
    const size = hexSize;
    let x =
      size * (Math.sqrt(3) * h.q + (Math.sqrt(3) / 2) * h.r) + hexOrigin.x;
    let y = size * ((3 / 2) * h.r) + hexOrigin.y;
    return { x, y };
  };

  const drawHex = (canvasID, center) => {
    for (let i = 0; i < 6; i++) {
      let start = getHexCornerCoord(center, i);
      let end = getHexCornerCoord(center, i + 1);
      drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
    }
  };

  const drawLine = (canvasID, start, end) => {
    const ctx = canvasID.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  };

  const drawHexCoordinates = (canvasHex, center, h) => {
    const ctx = canvasHex.current.getContext("2d");
    ctx.fillText(h.q, center.x - 10, center.y);
    ctx.fillText(h.r, center.x + 7, center.y);
  };

  // ====================== Return ======================
  return (
    <div>
      <canvas ref={canvasHex}></canvas>
    </div>
  );
};

export default Canvas;
