import React, { Fragment } from 'react';
import '../../App.css';

const ProductListItem = ({
  id,
  title,
  thumbnail,
  color,
  enabled,
  price,
  handleClick,
}) => (
  <Fragment>
    <h3>{title}</h3>
    <img src={thumbnail} alt={title} />
    <p>
      $ {price}
    </p>
    <div>
      In stock
      <div className={`circle ${color}`}></div>
    </div>
    <button disabled={!enabled} onClick={handleClick}>Add to cart</button>
  </Fragment>
);

export default ProductListItem;
