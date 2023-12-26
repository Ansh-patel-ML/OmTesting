import React from "react";

const Div = ({ styleX, children }) => {
  return (
    <div
      style={{
        height: "800px",
        width: "400px",
        backgroundColor: "red",
        ...styleX,
      }}
    >
      {children}
    </div>
  );
};

export default Div;
