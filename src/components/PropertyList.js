import React from "react";
import { SVGPin } from "../assets/svg/heart";
import { kFormatter } from "../helpers/calcHelpers";
import {
  PropertySectionLarge,
  RowCenterSpaceBetween,
  LightText,
  AttentionText
} from "./wrappers";
import { ImageComponent } from "./ImageComponent";
import { styles } from "../assets/styles/componentsStyles";
import { FavHeartButton } from "./Buttons";

export const PropertyList = ({ properties, changeFavProperties }) => {
  const classes = styles();
  return (
    <div className={classes.wrapperContainer}>
      <ul className={classes.ulProperties}>
        {properties &&
          properties.map(property => (
            <li className={classes.liProperties}>
              <PropertySectionLarge>
                <ImageComponent
                  src={property.propertyPhoto}
                  alt={property.buildingName}
                />

                <RowCenterSpaceBetween>
                  <AttentionText>{property.buildingName}</AttentionText>
                  <h2>{kFormatter(property.salePrice)}</h2>
                </RowCenterSpaceBetween>
                <RowCenterSpaceBetween>
                  <LightText>
                    <span>
                      <SVGPin />
                    </span>
                    {property.districtName}
                  </LightText>
                  <FavHeartButton
                    onClick={() => changeFavProperties(property.id)}
                    isFav={property.isFav}
                  />
                </RowCenterSpaceBetween>
              </PropertySectionLarge>
            </li>
          ))}
      </ul>
    </div>
  );
};
