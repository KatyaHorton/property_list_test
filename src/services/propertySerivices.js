export async function fecthPropertyList() {
  const url = `https://my-json-server.typicode.com/roycwc/jsonserver/properties`;
  let response = await fetch(url)
    .then(response => response.json())
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );

  return response;
}
