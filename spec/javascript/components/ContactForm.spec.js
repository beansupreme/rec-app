import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import ContactForm from 'components/ContactForm';
import FormGroup from 'components/FormGroup';

import renderer from 'react-test-renderer';

describe('<ContactForm/>', () => {
  it('shows a greeting message', () => {
    const wrapper = render(<ContactForm />);
    expect(wrapper.text()).toContain('Add your info for class updates!');
  });

  it('renders as expected', () => {
    const tree = renderer.create(<ContactForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactForm />, div);
  });

  it('renders several FormGroups', () => {
    const wrapper = shallow(<ContactForm />);

    expect(wrapper.find(FormGroup)).toHaveLength(4)
  });
});