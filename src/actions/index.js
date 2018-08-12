import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  SUBMIT_ORDER_TO_SERVER,
  CART_EMPTY,
  ORDER_SUBMITED,
  NEW_ORDER,
  TAG_SELECTED,
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_PRODUCT_BY_TAG_START,
  FETCH_PRODUCT_BY_TAG_SUCCESS,
  FETCH_PRODUCT_BY_TAG_FAILURE,
} from 'actionTypes';
import {
  fetchProducts as fetchProductsApi,
  sendProductToServer as sendProductToServerApi,
  fetchProductById as fetchProductByIdApi,
  fetchProductByTag as fetchProductByTagApi,
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

export const fetchProductById = id => async dispatch => {
  dispatch({type: FETCH_PRODUCT_BY_ID_START});
  try{
    const product = await fetchProductByIdApi(id);
    dispatch({
      type: FETCH_PRODUCT_BY_ID_SUCCESS,
      payload: product,
    });
  } catch(err) {
    dispatch({
      type: FETCH_PRODUCT_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  };
}

export const fetchProductByTag = id => async dispatch => {
  dispatch({type: FETCH_PRODUCT_BY_TAG_START});
  try{
    const product = await fetchProductByTagApi(id);
    dispatch({
      type: FETCH_PRODUCT_BY_TAG_SUCCESS,
      payload: product,
    });
  } catch(err) {
    dispatch({
      type: FETCH_PRODUCT_BY_TAG_FAILURE,
      payload: err,
      error: true,
    });
  };
}

export const addProductToCart = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: id,
  });
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

export const onTagSelection = val => dispatch => {
  dispatch({
    type: TAG_SELECTED,
    payload: val,
  });
};