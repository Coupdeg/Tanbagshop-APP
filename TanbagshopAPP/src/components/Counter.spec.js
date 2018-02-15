import 'react-native';
import React from 'react';
import Body from './Body.js';

import renderer from 'react-test-renderer';

test('Counter renders properly', () => {
  const tree = renderer.create(
    <Body
      increment={() => {}}
      decrement={() => {}}
      reset={() => {}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});