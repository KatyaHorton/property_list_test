import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);

  const properties = context.properties;

  console.log("properties", properties);
  return (
    <article>
      {properties.length < 1 && <p>Your properties will appear here</p>}
      <ol>
        {properties &&
          properties.map(property => (
            <li>
              <h3>{property.buildingName}</h3>
              <em>{property.districtName}</em>
              <figure>
                <img
                  src={property.propertyPhoto}
                  style={{ maxHeight: "200px" }}
                  alt={property.buildingName}
                />
                <figcaption>{`Apartrment in ${property.districtName}`}</figcaption>
              </figure>
            </li>
          ))}
      </ol>
    </article>
  );
};

export default PropertyContainer;
