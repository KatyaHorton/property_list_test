import React from "react";
import { styles } from "../assets/styles/componentsStyles";
import { TitleText } from "../components/wrappers";

export const MainHeader = () => {
  const classes = styles();
  return (
    <header className={classes.mainHeader}>
      <TitleText>Your Home</TitleText>
    </header>
  );
};
