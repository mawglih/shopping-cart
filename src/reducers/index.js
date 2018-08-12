import { combineReducers } from 'redux';
import Products from './products';
import Cart from './cart';
import ProductsPage from './productsPage';
import ProductPage from './ProductPage'
import Order from './order';
import Tagged from './tagged';

export default combineReducers({
  Products,
  Cart,
  ProductsPage,
  ProductPage,
  Order,
  Tagged,
});