import React from 'react';
import HelloWorld from '../../app/javascript/components/HelloWorld.jsx';
const ReactTestRenderer = require('react-test-renderer');
import renderer from 'react-test-renderer';

describe('HelloWorld', () => {
  xit('Displays the greeting and number', () => {
    const foo = renderer.create(<HelloWorld greeting='World' favoriteNumber="10" />);
    expect(foo).toMatchSnapShot();
  });
});
