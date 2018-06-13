import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting} Favorite Number: {this.props.favoriteNumber * 3 }
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  favoriteNumber: PropTypes.number
};
export default HelloWorld
