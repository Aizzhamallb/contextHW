import React from "react";
import { useContext } from "react";
import { blocksContext } from "../context";

const Show = () => {
  const { style } = useContext(blocksContext);
  const { height, width, color: background } = style;
  // console.log({ ...style, background: style.color });

  return (
    <div
      style={{ height: `${height}px`, width: `${width}px`, background }}></div>
  );
};

export default Show;
