import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rollDice } from '../../actions/diceActions';
import Dice from './Dice';
import Button from './Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Title from './Title';
import * as Personal from '../../util/constants';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWins: 0,
      cpuWins: 0
    };
  }
  resultMessage = (player, cpu) => {
    const playerWins = 'Player won!';
    const playerLoose = 'Player lost!';
    const draw = 'Its a draw!';
    if (player > cpu) {
      return <Title value={playerWins} />;
    } else if (cpu > player) {
      return <Title value={playerLoose} />;
    } else {
      return <Title value={draw} />;
    }
  };
  render() {
    let { number, playerWins, cpuWins } = this.props.number;
    const buttonTitle = `Let's go!`;
    const playerTitle = 'Player';
    const cpuTitle = 'CPU';
    const wins = 'Wins: ';
    console.log(number);
    console.log(playerWins);
    console.log(cpuWins);
    console.log(this.state);

    return (
      <div>
        <Card style={{ textAlign: 'center' }}>
          <Container>
            <Row>
              <Col>
                <Title value={playerTitle} />
                <Dice>{number[0]}</Dice>
                <Title value={wins} />
                {playerWins}
              </Col>
              <Col>
                <Title value={cpuTitle} />
                <Dice>{number[1]}</Dice>
                <Title value={wins} />
                {cpuWins}
              </Col>
            </Row>
            <Row>
              <Col>
                {number.length > 0 ? (
                  this.resultMessage(number[0], number[1])
                ) : (
                  <Title value={buttonTitle} />
                )}
                <Button />
              </Col>
            </Row>
          </Container>
        </Card>
        <Card
          style={{
            textAlign: 'left'
          }}
        >
          <h4>{Personal.title}</h4>
          <p>{Personal.name}</p>
          <p>{Personal.github}</p>
          <p>{Personal.portfolio}</p>
          <p>{Personal.contact}</p>
          <p>{Personal.email}</p>
          <p>{Personal.linkedin}</p>
        </Card>
      </div>
    );
  }
}

Table.propTypes = {
  rollDice: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps, {
  rollDice
})(Table);
