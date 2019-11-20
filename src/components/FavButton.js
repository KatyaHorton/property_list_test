import React from "react";
import { SVGHeartGreen, ArrowDown, ArrowUp } from "../assets/svg/heart";
import { RowCenterSpaceBetween } from "./wrappers";
import { styles } from "../assets/styles/componentsStyles";

export const FavButton = ({
  onClick,
  isListOpen,
  isFavProperties,
  favPropsNumber
}) => {
  const classes = styles();
  return (
    <button className={classes.favButton} onClick={() => onClick()}>
      <RowCenterSpaceBetween>
        <SVGHeartGreen />
        <RowCenterSpaceBetween>
          <p className={classes.favButtonText}>FAVOURITES</p>
          {isFavProperties && (
            <p className={classes.numberCounter}>{favPropsNumber}</p>
          )}
        </RowCenterSpaceBetween>
        {isListOpen ? <ArrowDown /> : <ArrowUp />}
      </RowCenterSpaceBetween>
    </button>
  );
};
