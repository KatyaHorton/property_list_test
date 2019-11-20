import React, { createContext, useEffect, useState } from "react";
import {
  getProperties,
  addFavAttribute,
  changeFavArrtibute,
  changeFavAttributeIfLoc
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

  const [useFavProperties, setFavProperties] = useLocalState(
    "useFavProperties"
  );
  const [useProperties, setUseProperties] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onFetchProperties = r => {
    const responceWithAddedFav = addFavAttribute(JSON.parse(r));
    setUseProperties(responceWithAddedFav);
    changeFavAttributeIfLoc(
      responceWithAddedFav,
      useFavProperties,
      setUseProperties
    );
  };

  useEffect(() => {
    getProperties().then(response => onFetchProperties(response));
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
