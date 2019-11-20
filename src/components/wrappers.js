import React from "react";
import { styles } from "../assets/styles/componentsStyles";

export const PropertySecrionLarge = ({ children }) => {
  return (
    <div
      style={{
        width: "40vw",
        width: "400px",
        margin: "0 10px 10px 0",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 4px -2px #999"
      }}
    >
      {children}
    </div>
  );
};
export const PropertySecrionSmall = ({ children }) => {
  return <div style={styles.containerSmall}>{children}</div>;
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
export const ColumnCenterSpaceAround = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      {children}
    </div>
  );
};

export const RightSideBar = ({ children }) => {
  return (
    <sidebar
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        padding: "10px",
        height: "auto",
        width: "250px",
        backgroundColor: "white"
      }}
    >
      {children}
    </sidebar>
  );
};
export const TitleText = ({ children }) => {
  return (
    <h1
      style={{
        margin: 0,
        padding: 0,
        color: "#00B0A8"
      }}
    >
      {children}
    </h1>
  );
};
export const SubTitleText = ({ children }) => {
  return (
    <h4
      style={{
        margin: 0,
        padding: 0,
        color: "#00B0A8"
      }}
    >
      {children}
    </h4>
  );
};
export const MainText = ({ children }) => {
  return (
    <p
      style={{
        margin: 0,
        padding: 0,
        color: "black"
      }}
    >
      {children}
    </p>
  );
};
export const LightText = ({ children }) => {
  return (
    <p
      style={{
        margin: 0,
        padding: 0,
        color: "#999"
      }}
    >
      {children}
    </p>
  );
};
