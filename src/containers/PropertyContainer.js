import React, { useEffect, useState } from "react";
// import { fecthPropertyList } from "../services/propertySerivices";

const PropertyContainer = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let response;
    async function fecthPropertyList() {
      const url = `https://my-json-server.typicode.com/roycwc/jsonserver/properties`;
      response = await fetch(url)
        .then(response => response.json())
        .then(response => setProperties(response))
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );

      return response;
    }

    fecthPropertyList();
  }, []);

  return (
    <article>
      <ol>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        {properties &&
          properties.map(peoperty => <li>{peoperty.buildingName}</li>)}
      </ol>
    </article>
  );
};

export default PropertyContainer;
