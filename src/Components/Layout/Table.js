import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateNumber } from '../../actions/diceActions';
import Dice from './Dice';
import Button from './Button';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  onClick = () => {
    this.props.generateNumber();
    console.log('1');
  };

  render() {
    console.log('PROPS' + JSON.stringify(this.props.number));
    return (
      <div>
        {Object.keys(this.props.number).map((num, i) => (
          <div key={i}>
            <Dice>{num.playerResult}</Dice>
            <Dice>{num.cpuResult}</Dice>
          </div>
        ))}
        <Button />
      </div>
    );
  }
}

Table.propTypes = {
  generateNumber: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, {
  generateNumber
})(Table);
