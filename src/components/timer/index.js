import React from 'react';
import {View, Text} from 'react-native';


class CountDownTimer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      calculateTimer: this.calculateTimer.bind(this),
      startTimer: true,
      timerMin: 2,
      timerSec: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.calculateTimer();
    }, 100);
  }
  
  calculateTimer() {
    this.intervalId = setInterval(() => {
      if (!(this.state.timerMin === 0 && this.state.timerSec === 0) && this.state.startTimer) {
        let timerSec = this.state.timerSec === 0 ? 59 : this.state.timerSec - 1;
        let timerMin = timerSec === 59 ? this.state.timerMin - 1 : this.state.timerMin;
        this.setState({timerMin, timerSec});
      } else {
        clearInterval(this.intervalId);
        this.setState({
          timerMin: 2,
          timerSec: 0,
          startTimer: false,
        });
        this.props.timesUp();
      }
    }, 1000);
  }

  render() {
    return (
      <Text>{`0${this.state.timerMin}:${this.state.timerSec < 9 ? `0${this.state.timerSec}` : this.state.timerSec}`}</Text>
    )
  }
}

export default CountDownTimer;