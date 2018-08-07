import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchProducts,
  addProductToCart,
} from 'actions';
import ProductListItem from '../Product-List-Item';
import Layout from 'components/Layout';
import { getProducts } from 'selectors';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const {
      products,
      addProductToCart,
    } = this.props;
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
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products: getProducts(state),
  };
};

const mapDispatchToProps = {
    fetchProducts,
    addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);