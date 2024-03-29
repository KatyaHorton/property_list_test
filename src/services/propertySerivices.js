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

export const addFavAttribute = arr => {
  const newArr = arr.map(obj => ({ ...obj, isFav: false }));
  return newArr;
};

const setFavList = (arr, fn) => {
  const result = arr.filter(obj => obj.isFav);
  fn(result);
};

export const changeFavArrtibute = (arr, id, fn, fn2) => {
  const result = arr.map(obj => {
    let item;
    if (obj.id === id) {
      item = { ...obj, isFav: !obj.isFav };
    }
    return item ? item : obj;
  });

  fn(result);
  setFavList(result, fn2);
};

export const changeFavAttributeIfLoc = (arr, arr2, fn) => {
  const result = arr.map(obj => {
    let item;
    arr2 &&
      arr2.map(obj2 => {
        if (obj.id === obj2.id) {
          item = obj2;
        }
      });
    return item ? item : obj;
  });
  fn(result);
};
