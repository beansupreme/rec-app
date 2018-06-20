import React from "react"
import FormGroup from './FormGroup'
import axios from "axios"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      telephone: '',
      mailing_address: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(
      '/contacts.json',
      {
        contact: {
          name: this.state.name,
          email: this.state.email,
          telephone: this.state.telephone,
          mailing_address: this.state.mailing_address
        }        
      }
    ).then(response => {
      console.log('server responded with:')
      console.log(response)
      alert('Thanks for adding your info!');
    }).catch(error => {
      console.log(error)
    })
  }

  updateAddress(event) { 
    this.setState({mailing_address: event.target.value})
  }

  updateField(event) {
    let fieldName = event.target.id.split('_')[1];
    let fieldsToUpdate = {};
    fieldsToUpdate[fieldName] = event.target.value;
    this.setState(fieldsToUpdate);
  }

  render() {
    return (
      <div className="card">
        <div id="contact-form" className="card-body">
          <h4 className="card-title">Add your info for class updates!</h4>
          <form id="add-contact-form" className="new_contact" onSubmit={this.handleSubmit}>
            <FormGroup 
              labelText="Name" onChange={this.updateField}
              inputId="contact_name_field" inputName="contact[name]" autoComplete="name"
            />
            <FormGroup 
              labelText="Email" onChange={this.updateField}
              inputId="contact_email_field" inputName="contact[email]" autoComplete="email"
            />
            <FormGroup 
              labelText="Telephone" onChange={this.updateField}
              inputId="contact_telephone_field" inputName="contact[telephone]" autoComplete="tel"
            />
            <FormGroup 
              labelText="Mailing Address" onChange={this.updateAddress}
              inputId="contact_mailing_address_field" inputName="contact[mailing_address]" autoComplete="address-line1"
            />
            <div className="actions">
              <input type="submit" id="add_contact_submit" value="Add Contact info" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm