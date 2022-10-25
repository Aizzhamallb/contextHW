import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { blocksContext } from "../context";

const AddForm = () => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");

  const { addBlock } = useContext(blocksContext);

  function createBlock() {
    if (!height || !width || !color) {
      alert("Some inputs are empty");
      return;
    }
    addBlock({ height, width, color });
    setHeight("");
    setWidth("");
    setColor("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="height"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="width"
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
      <input
        type="text"
        placeholder="color"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <button onClick={createBlock}>Save and Show!</button>
    </div>
  );
};

export default AddForm;
