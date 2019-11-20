import React from "react";
import { styles } from "../assets/styles/componentsStyles";

export const PropertySectionLarge = ({ children }) => {
  return <div style={styles.propertySectionLarge}>{children}</div>;
};
export const PropertySecrionSmall = ({ children }) => {
  return <div style={styles.containerSmall}>{children}</div>;
};
export const RowCenterSpaceBetween = ({ children }) => {
  return <div style={styles.rowCntereSpaceBetween}>{children}</div>;
};
export const ColumnCenterSpaceAround = ({ children }) => {
  return <div style={styles.columnCntereSpaceBetween}>{children}</div>;
};
export const RightSideBar = ({ children }) => {
  return <sidebar style={styles.sidebarRight}>{children}</sidebar>;
};
export const TitleText = ({ children }) => {
  return <h1 style={styles.lightColorText}>{children}</h1>;
};
export const SubTitleText = ({ children }) => {
  return <h4 style={styles.lightColorText}>{children}</h4>;
};
export const MainText = ({ children }) => {
  return <p style={styles.blackText}>{children}</p>;
};
export const LightText = ({ children }) => {
  return <p style={styles.lightText}>{children}</p>;
};
export const AttentionText = ({ children }) => {
  return <h3 style={styles.attentionText}>{children}</h3>;
};
