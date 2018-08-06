import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_TO_CART,
  SEARCH_PRODUCT_TAG,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  SUBMIT_ORDER_TO_SERVER,
  CART_EMPTY,
  ORDER_SUBMITED,
  NEW_ORDER,
} from 'actionTypes';
import {
  fetchProducts as fetchProductsApi,
  fetchCategories as fetchCategoriesApi,
  sendProductToServer as sendProductToServerApi,
} from 'api';

export const fetchProducts = () => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_START});
  try {
    const products = await fetchProductsApi();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch(err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const addProductToCart = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: id,
  });
};

export const searchProductTag = (e) => dispatch => {
  dispatch({
    type: SEARCH_PRODUCT_TAG,
    payload: e.target.name,
  });
};

export const fetchCategories = () => async dispatch => {
  try {
    dispatch({ type: FETCH_CATEGORIES_START});
    const categories = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch(err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const removeProductFromCart = id => async dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id,
  });
};

export const removeOneItemFromCart = id => async  dispatch => {
  dispatch({
    type: REMOVE_ONE_ITEM_FROM_CART,
    payload: id,
  });
};


export const submitOrderToServer = val => async dispatch => {
  const itemsJson =(JSON.stringify({items:val}));
  const submitted = sendProductToServerApi({itemsJson});
  dispatch({
    type: SUBMIT_ORDER_TO_SERVER,
    payload: submitted,
  });
  dispatch({
    type: CART_EMPTY,
  });
  dispatch({
    type: ORDER_SUBMITED,
  });
};

export const cartEmpty = () => dispatch => {
  dispatch({
    type: CART_EMPTY,
  });
};

export const orderSubmited = submitted => dispatch => {
  dispatch({
    type: ORDER_SUBMITED,
  });
};

export const startNewOrder = () => dispatch => {
  dispatch({
    type: NEW_ORDER,
  });
};