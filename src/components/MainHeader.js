import React from "react";
import { styles } from "../assets/styles/componentsStyles";
import { TitleText } from "../components/wrappers";

export const MainHeader = () => {
  return (
    <header style={styles.mainHeader}>
      <TitleText>Your Home</TitleText>
    </header>
  );
};
