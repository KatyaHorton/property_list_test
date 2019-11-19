export const getProperties = () => {
  return new Promise(function(resolve, reject) {
    const req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://my-json-server.typicode.com/roycwc/jsonserver/properties"
    );
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
