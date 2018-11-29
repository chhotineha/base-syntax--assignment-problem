import React, { Component } from 'react';
import './App.css';
import Sum from './firstAssignment/firstApp'

class App extends Component {
  state = {
    numbers: [
      { firstnumber: 16, secondnumber: 25 },
      { firstnumber: 36, secondnumber: 81 },
      { firstnumber: 121, secondnumber: 225 }
    ]
  }
  changenumber = (newnumber) => {
    this.setState({
      numbers: [
        { firstnumber: newnumber, secondnumber: 25 },
        { firstnumber: 36, secondnumber: 81 },
        { firstnumber: 121, secondnumber: 625 }
      ]
    })

  }
  changeinputnumber = (event) => {
    this.setState({
      numbers: [
        { firstnumber: event.target.value, secondnumber: 25 },
        { firstnumber: 36, secondnumber: 81 },
        { firstnumber: 121, secondnumber: 625 }
      ]
    })
  }

  render() {
    const buttonstyle = {
      padding: "10px",
      backgroundColor: "white",
      align: "center"
    };
    return (
      <div className="App">
        <h1>Hi This is My First Assignment</h1>
        <button onClick={() => this.changenumber(400)} style={buttonstyle}>change number</button>
        <Sum firstnumber={this.state.numbers[0].firstnumber} secondnumber={this.state.numbers[0].secondnumber}> </Sum>
        <Sum firstnumber={this.state.numbers[1].firstnumber} secondnumber={this.state.numbers[1].secondnumber} click={this.changenumber.bind(this, 300)}> </Sum>
        <Sum firstnumber={this.state.numbers[2].firstnumber} secondnumber={this.state.numbers[2].secondnumber} changed={this.changeinputnumber}> </Sum>

      </div>
    );
  }
}

export default App;
