import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Dice extends Component {
  render() {
    const number = this.props.number;

    return <div>{number}</div>;
  }
}
const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, {})(Dice);
