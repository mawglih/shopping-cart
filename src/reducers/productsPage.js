import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_SUCCESS,
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
    case LOAD_PRODUCTS_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        ids: R.concat(ids, state.ids),
      });
    case SEARCH_PRODUCT_TAG:
      console.log("search: ", payload);
      console.log("type of search: ", typeof payload);
      return R.merge(state, {
        search: payload,
      });
    default:
      return state;
  }
};