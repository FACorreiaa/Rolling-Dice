import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateNumber } from '../../actions/diceActions';

export class Dice extends Component {
  render() {
    const generateNumber = this.props.generateNumber;
    return <button onClick={generateNumber}>Click Here</button>;
  }
}

Dice.propTypes = {
  generateNumber: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, { generateNumber })(Dice);
