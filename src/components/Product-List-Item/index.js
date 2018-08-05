import React  from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = ({
  id,
  title,
  thumbnail,
  color,
  enabled,
  price,
  handleClick,
}) => (
  <div className="productListItem">
    <Link to={`/product/${id}`}><h3>{title}</h3></Link>
    <img src={thumbnail} alt={title} />
    <p>
      $ {price}
    </p>
    <div>
      In stock
      <div className={`circle ${color}`}></div>
    </div>
    <button className="button" disabled={!enabled} onClick={handleClick}>Add to cart</button>
  </div>
);

export default ProductListItem;
