'use strict';

import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

it('Should Button to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={() => null}>Clique me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
