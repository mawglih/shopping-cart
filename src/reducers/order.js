import * as actionTypes from 'actionTypes';

const INITIAL_STATE = {
  orders: []
}

const order = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_TO_CART:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      }
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
    default:
      return state;
  }
}

export default order;