import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_SUCCESS,
  // FETCH_PRODUCT_BY_ID_SUCCESS,
} from 'actionTypes';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    case LOAD_PRODUCTS_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, moreValues);
    default:
      return state;
  }
}