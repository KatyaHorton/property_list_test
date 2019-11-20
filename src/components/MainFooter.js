import React from "react";
import { styles } from "../assets/styles/componentsStyles";
import { LightText, ColumnStartSpaceBetween } from "../components/wrappers";

export const MainFooter = () => {
  const classes = styles();
  return (
    <footer className={classes.mainFooter}>
      <ColumnStartSpaceBetween>
        <LightText>
          Test Web Application by
          <em>
            <a
              style={{ color: "white", marginRight: "30px" }}
              href="https://www.linkedin.com/in/ekaterina-horton/"
            >
              @KatyaHorton
            </a>
          </em>
        </LightText>
        <LightText>20.11.2019</LightText>
      </ColumnStartSpaceBetween>
    </footer>
  );
};
