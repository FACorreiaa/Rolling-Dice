import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rollDice } from '../../actions/diceActions';

export class Button extends Component {
  render() {
    const generateNumber = this.props.rollDice;
    return (
      <div>
        <button
          style={{
            borderRadius: '12px',
            backgroundColor: 'black',
            color: 'white'
          }}
          onClick={generateNumber}
        >
          Roll Dice
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  rollDice: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, { rollDice })(Button);
