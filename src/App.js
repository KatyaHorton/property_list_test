import React from "react";
import PropertyContainer from "./containers/PropertyContainer.js";
import { PropertiesContextProvider } from "./context/propertiesContext.js";
import FavPropertyContainer from "./containers/FavPropertiesContainer.js";

function App() {
  return (
    <PropertiesContextProvider>
      <PropertyContainer />
      <FavPropertyContainer />
    </PropertiesContextProvider>
  );
}

export default App;
