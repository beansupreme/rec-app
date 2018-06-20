import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import ContactForm from 'components/ContactForm';
import FormGroup from 'components/FormGroup';

import renderer from 'react-test-renderer';
import sinon from 'sinon';
import axios from 'axios';
import moxios from 'moxios';

describe('<ContactForm/>', () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall()
  })
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

  it('posts the state to the contacts create endpoint on submit', () => {
    sinon.spy(axios, 'post');

    const wrapper = mount(<ContactForm />);
    wrapper.setState({
      name: 'Arya',
      email: 'noone@gmail.com',
      telephone: '',
      mailing_address: 'Hidden temple in Braavos'
    });


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

    let postData = axios.post.getCall(0).args;
    
    expect(postData[0]).toEqual('/contacts.json');
    expect(postData[1]).toEqual(expectedPostBody);


    axios.post.restore();
  });

  it('updates state when the inputs are changed', () => {
    const wrapper = mount(<ContactForm />);

    updateInput(wrapper, 'contact_name_field', 'Kermit');
    updateInput(wrapper, 'contact_email_field', 'kthefrog@gmail.com');
    updateInput(wrapper, 'contact_telephone_field', '666-122-4233');
    updateInput(wrapper, 'contact_mailing_address_field', '123 Sesame St');


    let state = wrapper.state();
    const expectedState = {
      name: 'Kermit',
      email: 'kthefrog@gmail.com',
      telephone: '666-122-4233',
      mailing_address: '123 Sesame St',
      errors: []
    }
    expect(state).toEqual(expectedState)
  });

  it('renders errors on the page if the create contact call fails', () => {
    moxios.stubRequest('/contacts.json', {
      status: 422,
      response: ["Name can't be blank"]
    })
    
    const wrapper = mount(<ContactForm />);

    wrapper.find('#add-contact-form').first().simulate('submit');

    // moxios.wait(function() {
    //   let request = moxios.requests.mostRecent();

    //   expect(request).toEqual({})
    //   request.respondWith({
    //     status: 422,
    //     response: ["Name can't be blank"]
    //   }).then(function() {
    //     console.log('got here!!!!!')
    //     expect(wrapper.find('#contact-form-errors').toIncludeText("Name can't be blank"));
    //     done();
    //   });

    // });
    console.log(wrapper.find('#contact-form-errors').first().html())
    expect(wrapper.find('#contact-form-errors').first()).toIncludeText("Name can't be blank");
    console.log('did this really work')
    
  });

});

function updateInput(wrapper, inputId, value) {
  let input = wrapper.find('#' + inputId).first();
  input.simulate('change', { target: { id: inputId, value: value }});
}