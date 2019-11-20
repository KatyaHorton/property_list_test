import React from "react";
import { SVGHeartGreen, ArrowDown, ArrowUp } from "../assets/svg/heart";
import { RowCenterSpaceBetween } from "./wrappers";

export const FavButton = ({
  onClick,
  isListOpen,
  isFavProperties,
  favPropsNumber
}) => {
  return (
    <button
      style={{
        color: "#00B0A8",
        border: "1px solid #00B0A8",
        height: "40px",
        width: "100%",
        margin: 0,
        padding: "0 15px"
      }}
      onClick={() => onClick()}
    >
      <RowCenterSpaceBetween>
        <SVGHeartGreen />
        <RowCenterSpaceBetween>
          <p>FAVOURITES</p>
          {isFavProperties && (
            <p
              style={{
                borderRadius: "50%",
                backgroundColor: "red",
                width: "20px",
                height: "20px",
                margin: 0,
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginLeft: "15px"
              }}
            >
              {favPropsNumber}
            </p>
          )}
        </RowCenterSpaceBetween>
        {isListOpen ? <ArrowDown /> : <ArrowUp />}
      </RowCenterSpaceBetween>
    </button>
  );
};
