import * as React from 'react';
import { Product } from './Product';

import * as renderer from 'react-test-renderer';

const product = {
  id: 5,
  name: 'Product 1',
  description: 'Lorem ipsum',
  price: 1000,
  isSpecial: false
};

it('renders correctly', () => {
  expect(renderer.create(
    <Product {...product} />
  ).toJSON()).toMatchSnapshot();
});
