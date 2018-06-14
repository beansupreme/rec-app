import React, {Component} from 'react'
import {shallow, render} from 'enzyme'
import FormGroup from 'components/FormGroup'
import renderer from 'react-test-renderer'

describe('<FormGroup />', () => {
  it('renders a form group label with the label name', () => {
    const wrapper = shallow(
      <FormGroup inputId="important_field" type="text" 
      formName="custom_form[field]" labelText="Important Field" />
    );
    expect(wrapper.text()).toContain('Important Field')
  });

  it('renders as expected', () => {
    const tree = renderer.create(
      <FormGroup inputId="field_name" type="text" 
      formName="custom_form[field]" labelText="Fill this out!"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});