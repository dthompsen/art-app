import React from 'react';
import Product from './Product';
import { useQuery, gql } from '@apollo/client';

const PRODUCT_QUERY = gql`
  {
    allProducts {
      id,
      title,
      description
    }
  }
`;

const ProductList = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  console.log(data);
  return (
    <div>
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
