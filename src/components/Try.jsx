import React, { useState, useEffect } from "react";

const Try = () => {
  // states
  const [hexSize, setHexSize] = useState(20);
  const [onShowCoords, toggleShow] = useState(false);
  // hexes drawn
  const [isDrawn, setDrawn] = useState(true);

  useEffect(() => {
    {
      isDrawn && drawHexes();
    }
    console.log("hi");
  }, []);

  const drawHexes = canvasID => {
    for (let r = 0; r <= 4; r++) {
      for (let q = 0; q <= 4; q++) {
        let center = hexToPixel({ q, r });
        drawHex(canvasID, center);
        drawHexCoordinates(canvasID, center, { q, r });
      }
    }
    setDrawn({ isDrawn: false });
  };

  const drawHex = (canvasID, center) => {
    for (let i = 0; i < 6; i++) {
      let start = getHexCornerCoord(center, i);
      let end = getHexCornerCoord(center, i + 1);
      drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
    }
  };

  const getHexCornerCoord = (center, i) => {
    let angle_deg = 60 * i - 30;
    let angle_rad = (Math.PI / 180) * angle_deg;
    let x = center.x + hexSize * Math.cos(angle_rad);
    let y = center.y + hexSize * Math.sin(angle_rad);

    return { x, y };
  };

  const hexToPixel = h => {
    const size = hexSize;
    let x = size * (Math.sqrt(3) * h.q + (Math.sqrt(3) / 2) * h.r);
    let y = size * ((3 / 2) * h.r);
    {
      onShowCoords && console.log(x, y);
    }
    return { x, y };
  };

  const drawLine = (canvasID, start, end) => {
    canvasID = document.getElementById("canvas");
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  };

  const drawHexCoordinates = (canvasID, center, h) => {
    canvasID = document.getElementById("canvas");
    const ctx = canvasID.getContext("2d");
    ctx.fillText(h.q, center.x + 3, center.y);
    ctx.fillText(h.r, center.x - 9, center.y);
  };

  const clickHex = e => {
    toggleShow({ onShowCoords: true });
  };
  return (
    <div>
      <canvas
        id={"canvas"}
        ref={canvasHex => (canvasHex = canvasHex)}
        // onClick={() => clickHex()}
      ></canvas>
    </div>
  );
};

export default Try;
