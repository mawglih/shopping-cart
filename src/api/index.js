import axios from 'axios';
import * as R from 'ramda';

export const fetchProducts =  () => {
    return axios.get('http://localhost:3001/get-items')
      .then(response => {
        console.log("products api", response.data);
        return response.data;
    })
    .catch(err => {
    console.log(err);
  });
  };

export const fetchProductById =  async id => {
  return axios.get('http://localhost:3001/get-items')
    .then(response => {
      console.log("product api: ", response.data);
      return response.data;
  }).then(data => {
    const product = R.find(R.propEq('id', id), data);
    console.log("api product is: ", product);
    return product;
  })
  .catch(err => {
  console.log(err);
  });
};

export const fetchProductByTag =  async tag => {
  return axios.get('http://localhost:3001/get-items')
    .then(response => {
      console.log("tag api: ", response.data);
      return response.data;
  }).then(data => {
    const byTag = R.compose(
        R.contains(tag),
        R.prop('tags')
      );
    const Filtered = R.filter(byTag, data);
    console.log("Filtered array is: ", Filtered);
    return Filtered;
  })
  .catch(err => {
  console.log(err);
  });
};

export const fetchCategories = (category) => {
  return null;
};

export const sendProductToServer = (items) => {
  return axios({
    method:'post',
    url: 'http://localhost:3001/checkout',
    data: items,
  })
  .then(response => {
    console.log("post success", response);
    return response.data;
  })
    .catch(err => {
    console.log(err);
  });
}
