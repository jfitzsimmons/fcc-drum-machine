import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    this.props.power ?
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
						clipId={padBankArr[i].id}
						clip={padBankArr[i].url}
						keyTrigger={padBankArr[i].keyTrigger}
						keyCode={padBankArr[i].keyCode}
						updateDisplay={this.props.updateDisplay}
						power={this.props.power} />
        )
      }) :
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
						clipId={padBankArr[i].id}
						clip="#"
						keyTrigger={padBankArr[i].keyTrigger}
						keyCode={padBankArr[i].keyCode}
						updateDisplay={this.props.updateDisplay}
						power={this.props.power} />
        )
      });
    return (
      <div className="pad-bank" >
				{padBank}
			</div>
    )
  }
}

export default PadBank;
