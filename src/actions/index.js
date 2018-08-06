import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  ADD_PRODUCT_TO_CART,
  SEARCH_PRODUCT_TAG,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  SUBMIT_ORDER_TO_SERVER,
} from 'actionTypes';
import {
  fetchProducts as fetchProductsApi,
  loadMoreProducts as loadMoreProductsApi,
  fetchCategories as fetchCategoriesApi,
} from 'api';
import {
  getDisplayedProductsLength,
} from 'selectors';

export const fetchProducts = () => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_START});
  try {
    const products = await fetchProductsApi();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products,
    });
    console.log("actions:", products);
  } catch(err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const loadMoreProducts = () => async (dispatch, getState) => {
  const offset = getDisplayedProductsLength(getState());
  dispatch({ type: LOAD_PRODUCTS_START});
  try {
    const products = await loadMoreProductsApi({offset});
    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: products,
    });
    console.log("actions:", products);
  } catch(err) {
    dispatch({
      type: LOAD_PRODUCTS_FAILURE,
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
  console.log("actions add to cart:", id);
};

export const removeOneItemFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_ONE_ITEM_FROM_CART,
    payload: id,
  });
  console.log("actions remove cart:", id);
};

export const addOrderToCart = ( id, product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    orderId: id,
    orderData: product,
  };
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
    console.log("fetch cat: ", categories);
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

export const submitOrderToServer = products => dispatch => {
  dispatch({
    type: SUBMIT_ORDER_TO_SERVER,
    payload: products,
  });
  console.log("actions add to cart:", products);
};