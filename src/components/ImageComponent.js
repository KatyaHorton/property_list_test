import React from "react";
import { styles } from "../assets/styles/componentsStyles";

export const ImageComponent = ({ src, alt, figcaption }) => {
  return (
    <figure style={styles.largeImgContainer}>
      <img style={styles.largeImg} src={src} alt={alt} />
    </figure>
  );
};
export const ImageSmallComponent = ({ src, alt }) => {
  return (
    <figure style={styles.smallImgContainer}>
      <img style={styles.smallImg} src={src} alt={alt} />
    </figure>
  );
};
