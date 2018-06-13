import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Hello from 'packs/hello_react';

describe('HelloReact component', () => {
  describe('when a name is given as a prop', () => {
    it('renders the given name!', () => {
      const wrapper = shallow(<Hello name="Caique"/>);
      expect(wrapper.text()).toBe('Hello Caique!');
    });
  });

  describe('when no name is given', () => {
    it('renders Hello David!', () => {
      const wrapper = shallow(<Hello />);
      expect(wrapper.text()).toBe('Hello David!');
    });
  });
});