import React from "react";
import { SVGHeartBlack, SVGHeartRed, SVGPin } from "../assets/svg/heart";
import { kFormatter } from "../helpers/calcHelpers";
import { PropertySecrionLarge, RowCenterSpaceBetween } from "./wrappers";
import { ImageComponent } from "./ImageComponent";

export const PropertyList = ({ properties, changeFavProperties }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "relative",
        top: "50px"
      }}
    >
      {properties &&
        properties.map(property => (
          <li
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0
            }}
          >
            <PropertySecrionLarge>
              <ImageComponent
                src={property.propertyPhoto}
                alt={property.buildingName}
              />

              <RowCenterSpaceBetween>
                <h3
                  style={{
                    color: "#085963",
                    margin: 0,
                    padding: 0,
                    cursor: "pointer"
                  }}
                >
                  {property.buildingName}
                </h3>
                <h2>{kFormatter(property.salePrice)}</h2>
              </RowCenterSpaceBetween>
              <RowCenterSpaceBetween>
                <p
                  style={{
                    fontSize: "0.8em",
                    color: "#999"
                  }}
                >
                  <span>
                    <SVGPin />
                  </span>
                  {property.districtName}
                </p>
                <button
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: "none",
                    "&:focus": {
                      backgroundColor: "red"
                    }
                  }}
                  onClick={() => changeFavProperties(property.id)}
                >
                  {property.isFav ? <SVGHeartRed /> : <SVGHeartBlack />}
                </button>
              </RowCenterSpaceBetween>
            </PropertySecrionLarge>
          </li>
        ))}
    </ul>
  );
};
