import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import {
  getCartProductsWithCount,
  getTotalCartPrice,
  getTotalCartCount,
  getProductsToCheckout,
  getOrderStatus,
} from 'selectors';
import {
  removeProductFromCart,
  addProductToCart,
  removeOneItemFromCart,
  submitOrderToServer,
  cartEmpty,
  startNewOrder,
} from 'actions';

const Cart = ({
  products,
  totalPrice,
  totalCartCount,
  removeProductFromCart,
  addProductToCart,
  removeOneItemFromCart,
  submitOrderToServer,
  cartEmpty,
  totalItems,
  status,
  startNewOrder,
  cart,
}) => {
  const isCartEmpty = R.isEmpty(products)
  const isSubmitted = status === true;
  return(
    <Fragment>
      {isCartEmpty &&  !isSubmitted && <div>
        <h1>Your shopping cart is empty</h1>

        <Link to="/">
          <i className="fa fa-arrow-left fa-2x">Return to shopping</i>
        </Link>
        </div>}

      <div className="cartDiv">

        {!isCartEmpty && <div className="cartheader">
        <h1 className="cartName">Your shopping cart</h1>
        <div>
          <p>Total number of items: {totalCartCount}</p>
          <p>Total price: {totalPrice}</p>
          <button
            className="button cleanBasket"
            onClick={() => cartEmpty()}
          >
            <i className="fa fa-trash-o"></i>
            <span> Remove all items from the cart</span>
          </button>
        </div>
        </div>}
        {isSubmitted && <div className="submittedOder">
          <h1>Your order submitted</h1>
          <Link 
            to="/"
            onClick={() => startNewOrder()}
          >
            <i className="fa fa-arrow-left fa-2x">Return to shopping</i>
          </Link>
        </div>}
        <div className="cartProducts"> 
          {products.map((el,i) => {
            return (
              <div key={i} className="cartDiv">
                <h3>{el.title}</h3>
                <img src={el.thumbnail} alt={el.title} />
                <div className="cartQunt">
                  <p>
                    Quantity {el.count}
                  </p>
                  <div>
                    <button
                      className="buttonSmall btnPlus"
                      onClick={() => addProductToCart(el.id)}
                    >
                      +
                    </button>
                    <button
                      className="buttonSmall btnPlus"
                      onClick={() => removeOneItemFromCart(el.id, cart)}
                    >
                      -
                    </button>  
                  </div>
                </div>
                <button
                  className="button"
                  onClick={() => removeProductFromCart(el.id)}
                >Remove</button>
              </div>
              );
            })}
          </div>
          {!isCartEmpty && <div className="submitOrder">
            <Link to="/">
              <button className="button returnHome">
                <i className="fa fa-arrow-left"></i>
                <span> Continue shopping!</span>
              </button>
            </Link>
            <button
              className="button submitBtn"
              onClick={() => submitOrderToServer(totalItems)}
            >
              <span>Submit Order </span>
              <i className="fa fa-check-square-o"></i>
            </button>
          </div>}
        </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  products: getCartProductsWithCount(state),
  totalPrice: getTotalCartPrice(state),
  totalCartCount: getTotalCartCount(state),
  totalItems: getProductsToCheckout(state),
  status: getOrderStatus(state),
  cart: state.Cart,
});

const mapDispatchToProps = {
  removeProductFromCart,
  addProductToCart,
  removeOneItemFromCart,
  submitOrderToServer,
  cartEmpty,
  startNewOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
