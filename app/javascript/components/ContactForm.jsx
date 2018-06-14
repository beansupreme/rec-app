import React from "react"

class ContactForm extends React.Component {
  render() {
    return (
      <div className="card">
        <div id="contact-form" className="card-body">
          <h4 className="card-title">Add your info for class updates!</h4>
          <form id="add-contact-form" className="new_contact">
            <div className="form-group">
              <label htmlFor="contact_name_field">Name</label>
              <input id="contact_name_field" className="form-control" type="text" name="contact[name]"/>
            </div>
            <div className="form-group">
              <label htmlFor="contact_email_field">Email</label>
              <input id="contact_email_field" className="form-control" type="text" name="contact[email]"/>
            </div>
            <div className="form-group">
              <label htmlFor="contact_telephone_field">Telephone</label>
              <input id="contact_telephone_field" className="form-control" type="text" name="contact[telephone]"/>
            </div>
            <div className="form-group">
              <label htmlFor="contact_mailing_address_field">Mailing Address</label>
              <input id="contact_mailing_address_field" className="form-control" type="text" name="contact[mailing_address]"/>
            </div>
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