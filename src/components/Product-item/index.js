import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const ProductItem = ({
  product,
  handleClick,
}) => (
  <Fragment>
    <h1>{product.title}</h1>
    {/* <img src={product.images[0]} alt="" />
    <img src={product.images[1]} alt="" />
    <img src={product.images[2]} alt="" /> */}
    <p>$ {product.price}</p>
    <div
      className={product.inStock ? "greenText" : "redText"} 
    >
      {product.inStock ? "In Stock" : "Out of Stock"}
    </div>
    <p>{product.description}</p>
    <div>
      {product.reviews ? product.reviews.map((item, i) => {
        return <div>
                  <h3>{item.title}</h3>
                  <h4>{item.author}</h4>
                  <p>{item.body}</p>
                  <p>{item.rating}</p>
                </div>
      }) : null}
    </div>
    <button onClick={handleClick} disabled={!product.inStock}>Add to cart</button>
  </Fragment>
);

export default withRouter(ProductItem);
