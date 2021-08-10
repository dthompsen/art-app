import React from 'react';

// TBD - re-purpose this for product detail

const Product = (props) => {
  const { product } = props;
  return (
    <div className="productListItem">
      {product.title}: {product.description}
    </div>
  );
};

export default Product;
