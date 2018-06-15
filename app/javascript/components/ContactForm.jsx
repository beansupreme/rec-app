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
              labelText="Name"
              inputId="contact_name_field" inputName="contact[name]"
            />
            <FormGroup 
              labelText="Email"
              inputId="contact_email_field" inputName="contact[email]"
            />
            <FormGroup 
              labelText="Telephone"
              inputId="contact_telephone_field" inputName="contact[telephone]"
            />
            <FormGroup 
              labelText="Mailing Address"
              inputId="contact_mailing_address_field" inputName="contact[mailing_address]"
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