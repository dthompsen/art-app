import React from 'react';
import Product from './Product';
import { useQuery, gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
  {
    allProducts {
      id,
      title,
      description
    }
  }
`;

export const ProductList = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  return (
    <div>
      Products
      {data && (
        <>
          {data.allProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
