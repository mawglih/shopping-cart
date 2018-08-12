import * as R from 'ramda';
import {
  FETCH_PRODUCT_BY_ID_SUCCESS,
} from 'actionTypes';

const INITIAL_STATE = {
  id: null,
}

export default ( state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload),
      });
    default:
      return state;
  }
};