import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
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
    default:
      return state;
  }
};