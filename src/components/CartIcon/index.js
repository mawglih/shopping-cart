import React, { Fragment } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {
  getTotalCartCount,
  getTotalCartPrice,
 } from 'selectors';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CartIcon = ({
  totalCartCount,
  totalPrice,
}) => (
  <Fragment>
    <Link
      to="/cart"
      className="button cart"
    >
      
        <i className="fa fa-shopping-cart fa-2x" />
        <span className="cartNumber">  {totalCartCount}</span>
        <span className="cartText">{'item(s) '} </span>
      <span className="cartPrice">
          {' $ '}{totalPrice}
        </span>

    </Link>
  </Fragment>
);

const mapStateToProps = state => {
  return {
    totalCartCount: getTotalCartCount(state),
    totalPrice: getTotalCartPrice(state),
  }
}

export default connect(mapStateToProps)(CartIcon);
