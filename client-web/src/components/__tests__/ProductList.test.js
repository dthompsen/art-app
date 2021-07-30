import { render } from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import { MockedProvider } from '@apollo/client/testing';
import { PRODUCT_QUERY, ProductList } from '../ProductList';

// Setup mock of GraphQL server product list query and result
const mocks = [
  {
    request: {
      query: PRODUCT_QUERY,
    },
    result: {
      data: {
        allProducts: [{ id: 1, title: 'Orange Sunset', description: 'An orange sunset.' }],
      },
    },
  },
];

it('renders product list without error', async () => {
  let comp
  await act(async () => {
    // make a ProductList - wrap in mock that specifies GraphQL query and result
    comp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>,
    );
    // wait until query completes
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  // verify Product List contains product title from mock server
  expect(comp.getByText(/Orange Sunset/));
});
