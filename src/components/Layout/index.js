import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from 'components/CartIcon';

const Layout = ({
  children,
}) => (
  <Fragment>
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <i className="fa fa-home fa-3x"> Home</i>
        </Link>
      </div>
      <div className="cart">
        <CartIcon />
      </div>
    </div>
    {children}
  </Fragment>
);

export default Layout;