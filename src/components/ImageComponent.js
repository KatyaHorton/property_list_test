import React from "react";

export const ImageComponent = ({ src, alt, figcaption }) => {
  return (
    <figure
      style={{
        width: "100%",
        height: "250px",
        overflow: "hidden",
        margin: 0,
        padding: 0
      }}
    >
      <img
        style={{
          width: "100%",
          margin: 0,
          padding: 0
        }}
        src={src}
        alt={alt}
      />
    </figure>
  );
};
export const ImageSmallComponent = ({ src, alt }) => {
  return (
    <figure
      style={{
        width: "60px",
        height: "60px",
        overflow: "hidden",
        borderRadius: "50%",
        margin: 0,
        padding: 0
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0
        }}
        src={src}
        alt={alt}
      />
    </figure>
  );
};
