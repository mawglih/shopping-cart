import { combineReducers } from 'redux';
import Products from './products';
import Cart from './cart';
import ProductsPage from './productsPage';
import Order from './order';

export default combineReducers({
  Products,
  Cart,
  ProductsPage,
  Order,
});