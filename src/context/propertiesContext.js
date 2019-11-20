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
  function useLocalState(localItem) {
    const [loc, setState] = useState(
      JSON.parse(localStorage.getItem(localItem))
    );
    function setLoc(newItem) {
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    }
    return [loc, setLoc];
  }

  const [useFavProperties, setFavProperties] = useLocalState();
  const [useProperties, setUseProperties] = useState([]);
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
