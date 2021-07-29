import React from 'react';

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div>
        {product.title}: {product.description}
      </div>
    </div>
  );
};

export default Product;
