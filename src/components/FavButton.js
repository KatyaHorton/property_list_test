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
  return (
    <button style={styles.favButton} onClick={() => onClick()}>
      <RowCenterSpaceBetween>
        <SVGHeartGreen />
        <RowCenterSpaceBetween>
          <p>FAVOURITES</p>
          {isFavProperties && (
            <p style={styles.numberCounter}>{favPropsNumber}</p>
          )}
        </RowCenterSpaceBetween>
        {isListOpen ? <ArrowDown /> : <ArrowUp />}
      </RowCenterSpaceBetween>
    </button>
  );
};
