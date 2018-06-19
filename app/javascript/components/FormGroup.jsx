import React from "react"

class FormGroup extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.inputId}>{this.props.labelText}</label>
        <input id={this.props.inputId} className="form-control" 
          type={this.props.inputType} name={this.props.inputName}
          onChange={this.props.onChange} autoComplete={this.props.autoComplete}
        />
      </div>
    )
  }
}

FormGroup.defaultProps = {
  inputType: "text",
  onChange: () => {},
  autoComplete: "on"
}

export default FormGroup;