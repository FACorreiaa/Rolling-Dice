import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateNumber } from '../../actions/diceActions';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return <div>{this.props.number.number}</div>;
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
