import React from "react";
import { styles } from "../assets/styles/componentsStyles";

export const ImageComponent = ({ src, alt, figcaption }) => {
  const classes = styles();
  return (
    <figure className={classes.largeImgContainer}>
      <img className={classes.largeImg} src={src} alt={alt} />
    </figure>
  );
};
export const ImageSmallComponent = ({ src, alt }) => {
  const classes = styles();
  return (
    <figure className={classes.smallImgContainer}>
      <img className={classes.smallImg} src={src} alt={alt} />
    </figure>
  );
};
