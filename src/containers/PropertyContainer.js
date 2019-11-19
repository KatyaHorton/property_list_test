import React, { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);

  const properties = context.properties;

  return (
    <article>
      {properties.length < 1 && <p>Your properties will appear here</p>}
      <ol>
        {properties &&
          properties.map(property => <li>{property.buildingName}</li>)}
      </ol>
    </article>
  );
};

export default PropertyContainer;
