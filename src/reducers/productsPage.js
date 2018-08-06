import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT_TAG,
} from 'actionTypes';

const INITIAL_STATE = {
  ids: [],
  search: '',
}

export default ( state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload),
      });
    case SEARCH_PRODUCT_TAG:
      return R.merge(state, {
        search: payload,
      });
    default:
      return state;
  }
};