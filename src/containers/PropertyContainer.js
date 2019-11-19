import React, { useEffect, useState } from "react";
// import { fecthPropertyList } from "../services/propertySerivices";

const PropertyContainer = () => {
  const [properties, setProperties] = useState([]);

  const get = url => {
    return new Promise(function(resolve, reject) {
      const req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };
      req.send();
    });
  };

  useEffect(() => {
    get(
      "https://my-json-server.typicode.com/roycwc/jsonserver/properties"
    ).then(response => setProperties(JSON.parse(response)));
  }, []);

  return (
    <article>
      <ol>
        <li>test</li>
        {properties &&
          properties.map(peoperty => <li>{peoperty.buildingName}</li>)}
      </ol>
    </article>
  );
};

export default PropertyContainer;
