import {
  ORDER_SUBMITED,
  NEW_ORDER,
} from 'actionTypes';

const INITIAL_STATE = {
  submitted: false,
}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ORDER_SUBMITED:
      return {
        ...state,
        submitted: true,
      };
    case NEW_ORDER:
      return {
        ...state,
        submitted: false,
      };
    default:
      return state;
  }
}
