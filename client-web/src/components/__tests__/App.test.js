import { render } from '@testing-library/react';
import { App } from '../App';

it('renders app without error', async () => {
  const comp = render( <App /> );
  expect(comp.getByText(/Art Manager/));
});
