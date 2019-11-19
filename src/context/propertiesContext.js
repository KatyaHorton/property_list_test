import React, { createContext, useEffect, useState } from "react";
import { getProperties, addFavAttribute } from "../services/propertySerivices";

const defaultPropertiesContext = {
  properties: [],
  favProperties: [],
  toggleFav: () => {
    console.log("toggled fav from context");
  }
};

export const PropertiesContext = createContext(defaultPropertiesContext);

export const PropertiesContextProvider = ({ children }) => {
  const [useProperties, setUseProperties] = useState([]);
  const [useFavProperties, setFavProperties] = useState([]);

  useEffect(() => {
    getProperties().then(response =>
      setUseProperties(addFavAttribute(JSON.parse(response)))
    );
  }, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties: useProperties,
        favProperties: useFavProperties,
        toggleFav: setUseProperties
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
