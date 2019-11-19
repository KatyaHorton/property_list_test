import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { SVGHeartBlack, SVGHeartRed, SVGPin } from "../assets/svg/heart";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);

  const properties = context.properties;
  const favPropsNumber = context.favProperties.length;
  const isFavProperties = favPropsNumber > 0;
  const changeFavProperties = context.toggleFav;
  const openDialog = context.toggleDialog;

  const kFormatter = num => {
    return Math.abs(num) > 99999
      ? "HK$" + Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
      : "HK$" + Math.sign(num) * Math.abs(num);
  };

  return (
    <article>
      <button
        style={{
          backgroundColor: "#00B0A8",
          color: "white",
          border: "none",
          borderRadius: "6px",
          height: "40px",
          width: "170px"
        }}
        onClick={() => openDialog()}
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

      {properties.length < 1 && <p>Your properties will appear here</p>}
      <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {properties &&
          properties.map(property => (
            <li
              style={{
                listStyle: "none"
              }}
            >
              <div
                style={{
                  width: "40vw",
                  minWidth: "500px",
                  margin: "0 10px 10px 0",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "2px 2px 4px -2px #999"
                }}
              >
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
                    src={property.propertyPhoto}
                    alt={property.buildingName}
                  />
                  <figcaption>{`Apartrment in ${property.districtName}`}</figcaption>
                </figure>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
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
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.8em",

                      "&:hover": {
                        textDecoration: "underline"
                      },
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
                </div>
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default PropertyContainer;
