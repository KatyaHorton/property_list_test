import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertySerivices";

const PropertyContainer = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(response => setProperties(JSON.parse(response)));
  }, []);

  return (
    <article>
      <ol>
        {properties &&
          properties.map(peoperty => <li>{peoperty.buildingName}</li>)}
      </ol>
    </article>
  );
};

export default PropertyContainer;
