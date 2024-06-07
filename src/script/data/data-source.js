class DataSource {
  static searchProduct(keyword) {
    return fetch(`https://fakestoreapi.com/products?keyword=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
