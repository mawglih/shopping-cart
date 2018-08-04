import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../Product-List-Item';

const Products = ({
  products,
  handleClick,
}) => (
  <Fragment>
    {products.map((el, i) => {
      return (
        <Link to={`/${el.id}`} key={i}>
          <ProductListItem 
            id={el.id}
            title={el.title}
            thumbnail={el.thumbnail}
            color={el.inStock ? "green" : "red" }
            price={el.price}
            enabled={el.inStock}
            handleClick={handleClick}
          />
        </Link>
      ); 
    })}
  </Fragment>
);

export default Products;