import React, {Component} from 'react'
import {shallow, render, mount} from 'enzyme'
import FormGroup from 'components/FormGroup'
import renderer from 'react-test-renderer'
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

describe('<FormGroup />', () => {
  it('renders a form group label with the label name', () => {
    const wrapper = shallow(
      <FormGroup inputId="important_field"
      inputName="custom_form[field]" labelText="Important Field" />
    );
    expect(wrapper.text()).toContain('Important Field')
  });

  it('renders as expected', () => {
    const tree = renderer.create(
      <FormGroup inputId="field_name"
      inputName="custom_form[field]" labelText="Fill this out!"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("uses 'text' as the default type", () => {
    const wrapper = mount(
      <FormGroup inputId="my-input" inputName="something" labelText="Look!" />
    );
    expect(wrapper.find('input')).toHaveProp('type', 'text');
  });

  it("allows for setting a custom type", () => {
    const wrapper = mount(
      <FormGroup inputId="my-number-input" inputName="something" 
      labelText="Number here" inputType="number" />
    );
    expect(wrapper.find('input')).toHaveProp('type', 'number');
  });

  it("renders the label as expected", () => {
    const wrapper = shallow(
      <FormGroup inputId="my-input" formName="something" 
      labelText="Look at this label!" />
    );
    expect(wrapper.find('label')).toHaveText('Look at this label!')
  });
});