import React, { useState, useEffect } from "react";
import StyledHex from "./StyledHex";
import "./hex.css";

export default function Tile({ tilesRows }) {
  const tilesRowsArray = [];
  const rawArray = [];
  const [counter, setCounter] = useState(0);

  const rawMaker = () => {
    tilesRows.map((r, index) => {
      //   console.log(r);
      setCounter(r);
      for (let i = 1; i < counter; i++) {
        console.log(i);
      }
    });
  };

  useEffect(() => {
    rawMaker();
    tilesRowsArray.push(rawArray);
    // console.log(tilesRowsArray);
  }, [rawMaker]);

  return (
    <div
      style={{
        background: "skyblue",
        display: "flex",
        justifyContent: "space-around",
        width: "35%",
        margin: "auto"
      }}
    >
      {/* {map.map(t => (
        <StyledHex key={t} t={t} />
      ))} */}
    </div>
  );
}
