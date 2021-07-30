import React from 'react';

const Product = (props) => {
  const { product } = props;
  return (
    <div className="productListItem">
      {product.title}: {product.description}
    </div>
  );
};

export default Product;
