import * as R from 'ramda';
import {
  FETCH_PRODUCT_BY_TAG_SUCCESS
} from 'actionTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCT_BY_TAG_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    default:
      return state;
  }
};
