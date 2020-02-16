import React, { useState } from "react";
import Tile from "./Tile";

export default function Tiles() {
  const [tilesRows] = useState([7, 8, 9, 10, 11, 12, 13]);

  return (
    <div>
      <Tile tilesRows={tilesRows} />
    </div>
  );
}
