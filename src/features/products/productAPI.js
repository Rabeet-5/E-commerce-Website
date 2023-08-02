export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter,sort) {
  //filter object
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length>1) {
      const lastCategoryvalues = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryvalues}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;

  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
