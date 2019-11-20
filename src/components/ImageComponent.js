import React from "react";

export const ImageComponent = ({ src, alt, figcaption }) => {
  return (
    <figure
      style={{
        width: "100%",
        height: "300px",
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
      <figcaption>{figcaption}</figcaption>
    </figure>
  );
};
