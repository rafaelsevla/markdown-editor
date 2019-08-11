'use strict';

import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

const noop = () => null;

it('Should Button default to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={noop}>Click me default</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should Button success to match snapshot', () => {
  const tree = renderer
    .create(
      <Button onClick={noop} kind="success">
        Click me success
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should Button danger to match snapshot', () => {
  const tree = renderer
    .create(
      <Button onClick={noop} kind="danger">
        Click me danger
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button with prop kind = "success" should has class "-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind="success">
      Button Success
    </Button>
  );
  expect(wrapper.hasClass('-success')).toBe(true);
  expect(wrapper.hasClass('-danger')).toBe(false);
});

it('Button with prop kind = "success" should has class "-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind="danger">
      Button danger
    </Button>
  );
  expect(wrapper.hasClass('-danger')).toBe(true);
  expect(wrapper.hasClass('-success')).toBe(false);
});
