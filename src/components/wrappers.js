import React from "react";

export const PropertySecrionLarge = ({ children }) => {
  return (
    <div
      style={{
        width: "40vw",
        minWidth: "500px",
        margin: "0 10px 10px 0",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 4px -2px #999"
      }}
    >
      {children}
    </div>
  );
};
export const RowCenterSpaceBetween = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {children}
    </div>
  );
};
