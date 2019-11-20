import React from "react";

export const FavButton = ({ onClick, isFavProperties, favPropsNumber }) => {
  return (
    <button
      style={{
        backgroundColor: "#00B0A8",
        color: "white",
        border: "none",
        borderRadius: "6px",
        height: "40px",
        width: "170px"
      }}
      onClick={() => onClick()}
      disabled={!isFavProperties}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <strong>Favourites</strong>
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
            justifyContent: "center"
          }}
        >
          {favPropsNumber}
        </p>
      </div>
    </button>
  );
};
