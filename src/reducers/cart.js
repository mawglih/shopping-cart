import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SUBMIT_ORDER_TO_SERVER,
  CART_EMPTY,
  REMOVE_ONE_ITEM_FROM_CART,
} from 'actionTypes';
import * as R from 'ramda';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return R.append(payload, state);
    case REMOVE_PRODUCT_FROM_CART:
      return R.without(R.of(payload), state);
    case REMOVE_ONE_ITEM_FROM_CART:
      const index = R.findIndex(R.equals(payload), state);
      return R.remove(index, 1, state);
    case SUBMIT_ORDER_TO_SERVER:
      return (payload, state);
    case CART_EMPTY:
      return [];
    default:
      return state;
  }
}