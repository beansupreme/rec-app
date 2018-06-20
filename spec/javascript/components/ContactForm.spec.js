import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import ContactForm from 'components/ContactForm';
import FormGroup from 'components/FormGroup';

import renderer from 'react-test-renderer';
import sinon from 'sinon'
import axios from 'axios'

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

  it('sets state for address when changed', () => {
    const wrapper = mount(<ContactForm />);

    wrapper.find('#contact_name_field').simulate('change', 'Arya');


    console.log(wrapper.state.mailing_address)
  });

  it('posts the expected values to the contacts create endpoint', () => {
    sinon.spy(axios, 'post');

    const wrapper = mount(<ContactForm />);

    wrapper.find('#contact_name_field').simulate('change', 'Arya');    
    wrapper.find('#contact_email_field').simulate('change', 'noone@gmail.com');    
    wrapper.find('#contact_telephone_field').simulate('change', '');    
    wrapper.find('#contact_mailing_address_field').simulate('change', 'Hidden temple in Braavos');    

    wrapper.find('#add-contact-form').first().simulate('submit');

    expect(axios.post.calledOnce).toEqual(true);

    let expectedPostBody = {
      contact: {
        name: 'Arya',
        email: 'noone@gmail.com',
        telephone: '',
        mailing_address: 'Hidden temple in Braavos'
      }
    };

    expect(wrapper.state().email).toEqual('foo')

    let postData = axios.post.getCall(0).args;
    console.log(postData)
    expect(postData[0]).toEqual('/contacts.json');
    expect(postData[1]).toEqual(expectedPostBody);


    axios.post.restore();
  });
});