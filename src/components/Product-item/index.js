import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { 
  fetchProducts,
  addProductToCart,
  searchProductTag,
 } from 'actions';
import { getProducts } from 'selectors';

class ProductItem extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const {
      match,
      products,
      addProductToCart,
      searchProductTag,
    } = this.props;

    const product = products.find(el => {
      return el.id === match.params.id;
    });
    
    return(
      <div>
        <Layout >
          {product && 
            <div className="productItem">
              <h1>{product.title}</h1>
              <div className="imageTags">
                <div className="productImages">
                  <img src={product.images[0]} alt="" />
                  <img src={product.images[1]} alt="" />
                  <img src={product.images[2]} alt="" /> 
                </div>
                <div>
                  <h3>Tags</h3>
                  <div className="tags">
                    {product.tags.map((el, i) => {
                      
                      return <button onClick={searchProductTag} name={el} key={i}>{el}</button>
                    })}
                  </div>
                  
                </div>
              </div>
              
              <p>$ {product.price}</p>
              <div
                className={product.inStock ? "greenText" : "redText"} 
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </div>
              <p>{product.description}</p>
              <div className="reviews">
                {product.reviews ? product.reviews.map((item, i) => {
                  return <div key={i}>
                            <h3>{item.title}</h3>
                            <h4>By: {item.author}</h4>
                            <p>{item.body}</p>
                            <p>
                              <span>Rating: </span>
                              <span
                                className={item.rating > 3 ? "greenText" : "redText"}
                              >
                                {item.rating}
                              </span>
                            </p>
                          </div>
                }) : null}
              </div>
              <button
                onClick={() => addProductToCart(product.id)}
                disabled={!product.inStock}
                className="button"
              >
                Add to cart
              </button>
            </div> 
          }
        </Layout>
      </div>
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
  searchProductTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

