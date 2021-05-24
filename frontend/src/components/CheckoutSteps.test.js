import React from 'react';
import renderer from 'react-test-renderer';

import CheckoutSteps from './CheckoutSteps';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CheckoutSteps />).toJSON();
  expect(tree).toMatchSnapshot();
});