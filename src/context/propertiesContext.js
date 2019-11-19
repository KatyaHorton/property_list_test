import React, { createContext, useEffect, useState } from "react";
import {
  getProperties,
  addFavAttribute,
  changeFavArrtibute
} from "../services/propertySerivices";

const defaultPropertiesContext = {
  properties: [],
  favProperties: [],
  toggleFav: () => {}
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

  const changeFavProperties = id => {
    changeFavArrtibute(useProperties, id, setUseProperties, setFavProperties);
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties: useProperties,
        favProperties: useFavProperties,
        toggleFav: changeFavProperties
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
