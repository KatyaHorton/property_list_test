import React, { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";

const FavPropertyContainer = () => {
  const context = useContext(PropertiesContext);
  const properties = context.favProperties;
  const isDialogOpen = context.isDialogOpen;
  const toggleDialog = context.toggleDialog;

  return (
    <dialog
      open={isDialogOpen}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        right: 0,
        backgroundColor: "pink",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        border: "none"
      }}
    >
      <article>
        <button onClick={toggleDialog}>
          <span class="close">&times;</span>
        </button>
        {properties.length < 1 && <p>Your properties will appear here</p>}
        <ol>
          {properties &&
            properties.map(property => <li>{property.buildingName}</li>)}
        </ol>
      </article>
    </dialog>
  );
};

export default FavPropertyContainer;
