import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);

  const properties = context.properties;
  const isFavProperties = context.favProperties.length > 0;
  const changeFavProperties = context.toggleFav;
  const openDialog = context.toggleDialog;

  return (
    <article>
      {isFavProperties && (
        <button onClick={() => openDialog()}>See Favourite Properties</button>
      )}

      {properties.length < 1 && <p>Your properties will appear here</p>}
      <ul>
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
              <button onClick={() => changeFavProperties(property.id)}>
                {!property.isFav
                  ? "Add to Favourites"
                  : "Remove from Favourites"}
              </button>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default PropertyContainer;
