import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { PropertyList } from "../components/PropertyList";
import { MainHeader } from "../components/MainHeader";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);
  const properties = context.properties;
  const changeFavProperties = context.toggleFav;

  return (
    <article>
      <MainHeader />
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
