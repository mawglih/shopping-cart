import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
} from 'actionTypes';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    default:
      return state;
  }
}