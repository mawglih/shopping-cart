import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from 'components/Products';
import ProductItem from 'components/Product-item';
import Cart from 'components/Cart';
import {
  PRODUCTS as PRODUCTS_URL,
  PRODUCT_ITEM as PRODUCT_ITEM_URL,
  CART as CART_URL,
  CATEGORY as CATEGORY_URL
} from './constants';

export default () => (
  <Switch>
    <Route
      exact
      path={PRODUCTS_URL}
      component={Products}
    />
    <Route
      exact
      path={PRODUCT_ITEM_URL}
      component={ProductItem}
    />
    <Route
      exact
      path={CART_URL}
      component={Cart}
    />
    <Route
      exact
      path={CATEGORY_URL}
      component={Products}
    />
  </Switch>
);