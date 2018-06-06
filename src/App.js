import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {secondAngle:0,minuteAngle:0,hourAngle:0}
  }
 
  componentWillMount () {
    this.setTime();
  }

  componentDidMount () {
    setInterval( () => {
      this.setTime();
    },1000)
  }

  setTime () {
    let time = new Date()
    let s=time.getSeconds();
    let m=time.getMinutes()+s/60;
    let h=time.getHours()+m/60;
    this.setState({secondAngle:s*6,minuteAngle:m*6,hourAngle:h*30})
  }

  render () {
    return (
        <Clock>
        <ClockHand height="27%" width="1%" angle={this.state.hourAngle} color="#F57C00"/>
        <ClockHand height="36%" width=".9%" angle={this.state.minuteAngle} color="#FFD600"/>
        <ClockHand height="38%" width=".5%" angle={this.state.secondAngle} color="#AEEA00"/>
        <div className="center"></div>
      </Clock>
    )
  }
}

const Clock = (props) => <div className="clock">{props.children}</div>

const ClockHand = (props) => <div className="clock-hand" style={
  {height:props.height,width:props.width,transform:'rotate('+props.angle+'deg)',backgroundColor:props.color}
}></div>

export default App
