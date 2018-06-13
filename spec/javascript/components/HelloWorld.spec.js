import React from 'react'
import { shallow } from 'enzyme';
import HelloWorld from 'components/HelloWorld';


describe('HelloWorld component', () => {
  describe('when the greeting and number are passed', () => {
    it('renders the greeting and number multiplied by 3', () => {
      const wrapper = shallow(<HelloWorld greeting="Bonjour!" favoriteNumber={3}/>);
      expect(wrapper.text()).toBe('Greeting: Bonjour! Favorite Number: 9');
    });
  });
});