import React, { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";

const FavPropertyContainer = () => {
  const context = useContext(PropertiesContext);
  const properties = context.favProperties;
  const isDialogOpen = context.isDialogOpen;
  const toggleDialog = context.toggleDialog;
  const changeFavProperties = context.toggleFav;

  return (
    <dialog
      open={isDialogOpen}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        right: 0,
        backgroundColor: "#00B0A8",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        border: "none"
      }}
    >
      <article>
        <button onClick={toggleDialog}>Close Dialog</button>
        {properties.length < 1 && (
          <p>Your favourite properties will appear here</p>
        )}
        <ol>
          {properties &&
            properties.map(property => (
              <li>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4>{property.buildingName}</h4>
                  <button onClick={() => changeFavProperties(property.id)}>
                    <span>&times;</span>
                  </button>
                </div>
              </li>
            ))}
        </ol>
      </article>
    </dialog>
  );
};

export default FavPropertyContainer;
