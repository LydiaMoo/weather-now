import React from 'react';
import CitySearch from '../CitySearch';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <CitySearch/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});