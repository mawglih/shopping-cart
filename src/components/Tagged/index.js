import React, { Component } from 'react';
import Layout from '../Layout';
import { connect } from 'react-redux';
import * as RA from 'ramda-adjunct';
import {
  fetchProductByTag,
  addProductToCart,
} from 'actions';
import ProductListItem from 'components/Product-List-Item';
import { getTaggedProducts } from 'selectors';

class Tagged extends Component {
  componentDidMount() {
    this.props.fetchProductByTag(this.props.match.params.id);
    console.log("Tagged state: ", this.props.match.params.id);
  }

  render() {
    const {
      products,
      addProductToCart,
      match,
    } = this.props;

    const TAG = match.params.id;

    console.log("inside Tagged page: ", products);
    console.log("check if products is array: ", RA.isArray(products));
    

    return(
      <Layout>
        <h1 className="App">Selection by Tag "{TAG}"</h1>
        {products && 
          <div className="products">
            {products.map((el, i)=> {
              return (              
                <ProductListItem
                  key={i}
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
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products: getTaggedProducts(state),
  };
};

const mapDispatchToProps = {
  fetchProductByTag,
  addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tagged);
