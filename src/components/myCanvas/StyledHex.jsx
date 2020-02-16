import React from "react";
import "./hex.css";

export default function StyledHex({ t }) {
  return (
    <div onClick={() => console.log(t)}>
      <div
        style={{
          width: "0",
          borderBottom: "10px solid #444",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent"
        }}
      ></div>
      <div
        style={{
          width: "40px",
          height: "20px",
          backgroundColor: "#444"
        }}
      ></div>
      <div
        style={{
          width: "0",
          borderTop: "10px solid #444",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent"
        }}
      ></div>
    </div>
  );
}
