import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { PropertyList } from "../components/PropertyList";
import { FavButton } from "../components/FavButton";

const PropertyContainer = () => {
  const context = useContext(PropertiesContext);

  const properties = context.properties;
  const favPropsNumber = context.favProperties.length;
  const isFavProperties = favPropsNumber > 0;
  const changeFavProperties = context.toggleFav;
  const openDialog = context.toggleDialog;

  return (
    <article style={{ display: "flex" }}>
      {properties.length < 1 ? (
        <p>Your properties will appear here</p>
      ) : (
        <PropertyList
          properties={properties}
          changeFavProperties={changeFavProperties}
        />
      )}
      <FavButton
        onClick={openDialog}
        isFavProperties={isFavProperties}
        favPropsNumber={favPropsNumber}
      />
    </article>
  );
};

export default PropertyContainer;
