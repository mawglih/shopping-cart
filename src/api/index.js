import axios from 'axios';
import * as R from 'ramda';

export const fetchProducts =  () => {
    return axios.get('http://localhost:3001/get-items')
      .then(response => {
        console.log("api: ", response.data);
        return response.data;
    })
    .catch(err => {
    console.log(err);
  });
  };

export const loadMoreProducts =  ({offset}) => {
  return axios.get('http://localhost:3001/get-items')
    .then(response => {
      console.log("api: ", response.data);
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
    console.log('api single: ', product);
    return product;
  })
  .catch(err => {
  console.log(err);
  });
};
export const fetchCategories = (category) => {
  return null;
};
  // export const addProductToCart = (id) => {
  //   return axios({
  //     method:'post',
  //     url: 'http://localhost:3001/get-items'
  //   })
  //   get('http://localhost:3001/get-items')
  //   .then(response => {
  //     return response.data.find(el => {
  //       return el.id === id;
  //       });
  //     })
  //     .catch(err => {
  //     console.log(err);
  //   });
  // }
