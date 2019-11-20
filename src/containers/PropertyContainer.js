import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { PropertyList } from "../components/PropertyList";
import { TitleText } from "../components/wrappers";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);
  const properties = context.properties;
  const changeFavProperties = context.toggleFav;

  return (
    <article>
      <header
        style={{
          position: "fixed",
          top: "0",
          padding: "15px",
          backgroundColor: "white",
          width: "100%",
          height: "40px"
        }}
      >
        <TitleText>List of avaliable properties</TitleText>
      </header>
      {properties.length < 1 ? (
        <p>Your properties will appear here</p>
      ) : (
        <PropertyList
          properties={properties}
          changeFavProperties={changeFavProperties}
        />
      )}
    </article>
  );
};

export default PropertyContainer;
