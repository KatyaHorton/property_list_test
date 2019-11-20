import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { PropertyList } from "../components/PropertyList";
import { MainHeader } from "../components/MainHeader";
import { MainFooter } from "../components/MainFooter";

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
      <MainFooter />
    </article>
  );
};

export default PropertyContainer;
