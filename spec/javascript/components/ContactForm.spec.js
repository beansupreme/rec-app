import React from 'react'
import { shallow, render } from 'enzyme';
import ContactForm from 'components/ContactForm';

describe('<ContactForm/>', () => {
  it('shows a greeting message', () => {
    const wrapper = render(<ContactForm />);
    expect(wrapper.text()).toContain('Add your info for class updates!');
  });
});