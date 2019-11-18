import React, { useEffect, useState } from "react";
import { fecthPropertyList } from "../services/propertySerivices";

const PropertyContainer = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getList(fn) {
      const result = await fecthPropertyList();
      const newProperties = await result;
      fn(newProperties);
      console.log("properties", properties);
    }
    getList(setProperties);
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
