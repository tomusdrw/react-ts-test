import * as React from 'react';
import { Loading } from './Loading';

import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  expect(renderer.create(
    <Loading />
  ).toJSON()).toMatchSnapshot();
});
