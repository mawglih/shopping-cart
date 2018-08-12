import * as R from 'ramda';

export const getProductById = (state, id) => 
// console.log("getpropduct product", state);
R.prop(id, state.Products);

export const getProducts = state => {
  const products = R.map(id => getProductById(state, id), state.ProductsPage.ids);
  console.log("getpropducts products", products);
  return products;
}

export const getTaggedProducts = state => {
  const products = R.map(id => getProductById(state, id), state.Tagged.ids);
  console.log("gettaggedproducts: ", products);
  return products;
}

export const getDisplayedProductsLength = state => R.length(state.ProductsPage.ids);

export const getTotalCartCount = state => R.length(state.Cart);

export const getTotalCartPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getProductById(state, id))
  )(state.Cart);
  return totalPrice;
}

export const getOrderStatus = state => state.Order.submitted;

export const getProductsByTag = state => {
  const applySearch = item => R.contains(
    state.ProductsPage.search,
    R.prop('name', item.tags)
  )
  const products = R.compose(
    R.filter(applySearch),
    R.map(id => getProductById(state, id))
  )(state.ProductsPage.ids)
  console.log("search products names: ", products);
  return products;
}

 export const getProductsToCheckout = state => {
  const products = getCartProductsWithCount(state);
  const items = R.map(rec => R.pick(
    ['id', 'quantity'], rec
  ), products);
  return items;
};

export const getCategories = state => R.values(state.Products.tags);

export const getCartProductsWithCount = state => {
  const uniqueIds = R.uniq(state.Cart);
  const productCount = id => R.compose(
    R.length,
    R.filter(cartId => R.equals(id, cartId))
  )(state.Cart);
  const productWithCount = product => R.assoc('quantity', productCount(product.id), product);
  const products = R.compose (
    R.map(productWithCount),
    R.map(id => getProductById(state, id))
  )(uniqueIds);
  return products;
};
