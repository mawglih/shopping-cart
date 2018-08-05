import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchProducts,
  fetchCategories,
  loadMoreProducts,
  addProductToCart,
} from 'actions';
import ProductListItem from '../Product-List-Item';
import Layout from 'components/Layout';
import { getProducts } from 'selectors';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
  }
  render() {
    const {
      products,
      loadMoreProducts,
      addProductToCart,
    } = this.props;
    console.log('products in render', products);
    return(
      <Layout>
        <div className="products">
          {products.map(el=> {
            return (              
              <ProductListItem
                key={el.id} 
                id={el.id}
                title={el.title}
                thumbnail={el.thumbnail}
                color={el.inStock ? "green" : "red" }
                price={el.price}
                enabled={el.inStock}
                handleClick= {() => addProductToCart(el.id)}
              />
            ); 
          })}
          <button
            className="loadButton button"
            onClick={loadMoreProducts}
          >
            Load More Products
          </button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
    console.log("map in products", state);
  return{
    products: getProducts(state),
  };
};

const mapDispatchToProps = {
    fetchProducts,
    fetchCategories,
    loadMoreProducts,
    addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);