import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from '@fortawesome/free-solid-svg-icons';
export class Dice extends Component {
  renderSwitch(param) {
    switch (param) {
      case 1:
        return (
          <FontAwesomeIcon
            icon={faDiceOne}
            size='6x'
            style={{ color: '#00008b' }}
            spin
          />
        );
      case 2:
        return (
          <FontAwesomeIcon
            icon={faDiceTwo}
            size='6x'
            style={{ color: '#00008b' }}
            pulse
          />
        );
      case 3:
        return (
          <FontAwesomeIcon
            icon={faDiceThree}
            size='6x'
            style={{ color: '#00008b' }}
            spin
          />
        );
      case 4:
        return (
          <FontAwesomeIcon
            icon={faDiceFour}
            size='6x'
            style={{ color: '#00008b' }}
            pulse
          />
        );
      case 5:
        return (
          <FontAwesomeIcon
            icon={faDiceFive}
            size='6x'
            style={{ color: '#00008b' }}
            spin
          />
        );
      case 6:
        return (
          <FontAwesomeIcon
            icon={faDiceSix}
            size='6x'
            style={{ color: '#00008b' }}
            pulse
          />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={faDiceOne}
            size='6x'
            style={{ color: '#00008b' }}
          />
        );
    }
  }
  render() {
    return <div>{this.renderSwitch(this.props.children)}</div>;
  }
}
const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, {})(Dice);
