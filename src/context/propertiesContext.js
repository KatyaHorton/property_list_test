import React, { createContext, useEffect, useState } from "react";
import {
  getProperties,
  addFavAttribute,
  changeFavArrtibute
} from "../services/propertySerivices";

const defaultPropertiesContext = {
  properties: [],
  favProperties: [],
  toggleFav: () => {},
  setIsDialogOpen: () => {},
  isDialogOpen: false
};

export const PropertiesContext = createContext(defaultPropertiesContext);

export const PropertiesContextProvider = ({ children }) => {
  const [useProperties, setUseProperties] = useState([]);
  const [useFavProperties, setFavProperties] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getProperties().then(response =>
      setUseProperties(addFavAttribute(JSON.parse(response)))
    );
  }, []);

  const changeFavProperties = id => {
    changeFavArrtibute(useProperties, id, setUseProperties, setFavProperties);
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties: useProperties,
        favProperties: useFavProperties,
        toggleFav: changeFavProperties,
        toggleDialog: toggleDialog,
        isDialogOpen: isDialogOpen
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
