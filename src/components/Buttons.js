import React from "react";
import { Close } from "../assets/svg/heart";
import { styles } from "../assets/styles/componentsStyles";

export const CloseButton = ({ onClick }) => {
  return (
    <button style={styles.closeButton} onClick={onClick}>
      <Close />
    </button>
  );
};
