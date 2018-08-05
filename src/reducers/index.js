import { combineReducers } from 'redux';
import Products from './products';
import Cart from './cart';
import ProductsPage from './productsPage';

export default combineReducers({
  Products,
  Cart,
  ProductsPage,
});