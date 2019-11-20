import React from "react";
import { styles } from "../assets/styles/componentsStyles";
import { TitleText } from "../components/wrappers";

export const MainFooter = () => {
  const classes = styles();
  return (
    <footer className={classes.mainFooter}>
      <TitleText>
        Test Web Application by
        <em>
          <a
            style={{ color: "white", marginRight: "30px" }}
            href="https://www.linkedin.com/in/ekaterina-horton/"
          >
            @KatyaHorton
          </a>
        </em>
      </TitleText>
    </footer>
  );
};
