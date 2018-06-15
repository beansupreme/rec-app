import React from "react"

class FormGroup extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.inputId}>{this.props.labelText}</label>
        <input id={this.props.inputId} className="form-control" 
          type={this.props.inputType} name={this.props.inputName}
        />
      </div>
    )
  }
}

FormGroup.defaultProps = {
  inputType: "text"
}

export default FormGroup;