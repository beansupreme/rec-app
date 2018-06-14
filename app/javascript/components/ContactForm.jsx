import React from "react"
import FormGroup from './FormGroup'

class ContactForm extends React.Component {
  render() {
    return (
      <div className="card">
        <div id="contact-form" className="card-body">
          <h4 className="card-title">Add your info for class updates!</h4>
          <form id="add-contact-form" className="new_contact">
            <FormGroup 
              inputId="contact_name_field" type="text"
              formName="contact[name]" labelText="Name"
            />
            <FormGroup 
              inputId="contact_email_field" type="text"
              formName="contact[email]" labelText="Email"
            />
            <FormGroup 
              inputId="contact_telephone_field" type="text"
              formName="contact[telephone]" labelText="Telephone"
            />
            <FormGroup 
              inputId="contact_mailing_address_field" type="text"
              formName="contact[mailing_address]" labelText="Mailing Address"
            />
            <div className="actions">
              <button type="button" id="add-contact-info-btn" className="btn btn-primary">
                Add my contact info
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm