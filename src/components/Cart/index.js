import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import {
  getCartProductsWithCount,
  getTotalCartPrice,
  getTotalCartCount,
} from 'selectors';
import {
  removeProductFromCart,
  addProductToCart,
  removeOneItemFromCart,
  submitOrderToServer,
} from 'actions';

const Cart = ({
  products,
  totalPrice,
  removeProductFromCart,
  addOneItemToCart,
  removeOneItemFromCart,
  submitOrderToServer,
}) => {
  const isCartEmpty = R.isEmpty(products)
  console.log("in cart: ", products);
  console.log("in cart items: ", products.length);
  return(
    <Fragment>
      {isCartEmpty && <div>
        <h1>Your shopping cart is empty</h1>

        <Link to="/">
          <i className="fa fa-arrow-left fa-2x"> Return to shopping</i>
        </Link>
        </div>}

      <div className="cartDiv">

        {!isCartEmpty && <div className="cartheader">
        <h1 className="cartName">Your shopping cart</h1>
        <div>
          <p>Total number of items: {products.length}</p>
          <p>Total price: {totalPrice}</p>
        </div>
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
                      onClick={() => addOneItemToCart(el.id)}
                    >
                      +
                    </button>
                    <button
                      className="buttonSmall btnPlus"
                      onClick={() => removeOneItemFromCart(el.id)}
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
            <button
              className="button submitBtn"
              onClick={() => submitOrderToServer(products)}
            >
              Submit Order
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
});

const mapDispatchToProps = {
  removeProductFromCart,
  addProductToCart,
  removeOneItemFromCart,
  submitOrderToServer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
