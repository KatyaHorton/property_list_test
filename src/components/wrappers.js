import React from "react";
import { styles } from "../assets/styles/componentsStyles";

export const PropertySectionLarge = ({ children }) => {
  const classes = styles();
  return <div className={classes.propertySectionLarge}>{children}</div>;
};
export const PropertySecrionSmall = ({ children }) => {
  const classes = styles();
  return <div className={classes.containerSmall}>{children}</div>;
};
export const RowCenterSpaceBetween = ({ children }) => {
  const classes = styles();
  return <div className={classes.rowCntereSpaceBetween}>{children}</div>;
};
export const ColumnCenterSpaceAround = ({ children }) => {
  const classes = styles();
  return <div className={classes.columnCntereSpaceBetween}>{children}</div>;
};
export const RightSideBar = ({ children }) => {
  const classes = styles();
  return <sidebar className={classes.sidebarRight}>{children}</sidebar>;
};
export const TitleText = ({ children }) => {
  const classes = styles();
  return <h1 className={classes.lightColorText}>{children}</h1>;
};
export const SubTitleText = ({ children }) => {
  const classes = styles();
  return <h4 className={classes.lightColorText}>{children}</h4>;
};
export const MainText = ({ children }) => {
  const classes = styles();
  return <p className={classes.blackText}>{children}</p>;
};
export const LightText = ({ children }) => {
  const classes = styles();
  return <p className={classes.lightText}>{children}</p>;
};
export const AttentionText = ({ children }) => {
  const classes = styles();
  return <h3 className={classes.attentionText}>{children}</h3>;
};
