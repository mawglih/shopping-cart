import * as R from 'ramda';
import {
  FETCH_PRODUCTS_SUCCESS,
} from 'actionTypes';

const INITIAL_STATE = {
  ids: [],
}

export default ( state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload),
      });
    // case TAG_SELECTED:
    //   const byTag = R.compose(
    //     R.contains(payload),
    //     console.log("payload in reducer", payload),
    //     R.prop('tags')
    //   );
    //   return R.filter(byTag, [{id: 1, tags: [payload]}]);
    default:
      return state;
  }
};