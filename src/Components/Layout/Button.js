import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateNumber } from '../../actions/diceActions';

class Button extends Component {
  onClick = () => {
    this.props.generateNumber();
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click here</button>
      </div>
    );
  }
}

Button.propTypes = {
  generateNumber: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, {
  generateNumber
})(Button);
