import React, { useState } from "react";

export const blocksContext = React.createContext();

const BlocksContextProvider = ({ children }) => {
  const [style, setStyle] = useState("");

  function addBlock(styles) {
    setStyle(styles);
  }
  return (
    <blocksContext.Provider value={{ style, addBlock }}>
      {children}
    </blocksContext.Provider>
  );
};

export default BlocksContextProvider;
