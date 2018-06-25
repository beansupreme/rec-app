import React from "react"
class MessageBox extends React.Component {
  render() {
    const message = this.props.message
    return (
      <div>
      { message && 
        <div id={this.props.id}  className="alert alert-success" role="alert" >
          {message}
        </div> 
      }
      </div>
    );
  }
}
export default MessageBox;