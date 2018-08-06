import axios from 'axios';
import * as R from 'ramda';

export const fetchProducts =  () => {
    return axios.get('http://localhost:3001/get-items')
      .then(response => {
        return response.data;
    })
    .catch(err => {
    console.log(err);
  });
  };

export const fetchProductById =  (id) => {
  return axios.get('http://localhost:3001/get-items')
    .then(response => {
      console.log("api: ", response.data);
      return response.data;
  }).then(data => {
    const product = R.find(R.propEq('id', id), data);
    return product;
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
