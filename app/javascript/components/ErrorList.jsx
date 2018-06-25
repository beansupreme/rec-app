import React from "react"
class ErrorList extends React.Component {
  render() {
    const errors = this.props.errors
    const errorItems = errors.map((error, index) => <span key={index}>{error}</span>);
    return (
      <div>
      { errors.length > 0 && 
        <div id={this.props.id} className="alert alert-danger" role="alert">
          {errorItems}
        </div> 
      }
      </div>
    );
  }
}
export default ErrorList;