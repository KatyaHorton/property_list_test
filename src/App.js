import React from "react";
import PropertyContainer from "./containers/PropertyContainer.js";
import { PropertiesContextProvider } from "./context/propertiesContext.js";

function App() {
  return (
    <PropertiesContextProvider>
      <PropertyContainer />
    </PropertiesContextProvider>
  );
}

export default App;
