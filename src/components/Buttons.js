import React from "react";
import { Close } from "../assets/svg/heart";
import { styles } from "../assets/styles/componentsStyles";
import { SVGHeartBlack, SVGHeartRed } from "../assets/svg/heart";

export const CloseButton = ({ onClick }) => {
  const classes = styles();
  return (
    <button className={classes.closeButton} onClick={onClick}>
      <Close />
    </button>
  );
};
export const FavHeartButton = ({ onClick, isFav }) => {
  const classes = styles();
  return (
    <button className={classes.favHeartButton} onClick={onClick}>
      {isFav ? <SVGHeartRed /> : <SVGHeartBlack />}
    </button>
  );
};
