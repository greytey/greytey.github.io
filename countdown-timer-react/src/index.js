import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

var goalForCalculations = null;

class Site extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col align-self-start">
            <h1 className="display-2 layout-form">Countdown Timer</h1>
          </div>
          <div className="col align-self-end text-right">
            <div id="clock" className="col align-self-end">
              <Clock />
            </div>
          </div>
        </div><div className="row">
          <div className="col justify-content-center">
            <div id="form">
              <DateTimeForm />
            </div>
          </div>
        </div><div className="row">
          <div className="col justify-content-center">
            <div id="output">
              <Calculations goal={goalForCalculations} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Uhr kopiert aus https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2 className="display-2">{this.state.date.toLocaleTimeString()}</h2>
        <h6 className="display-4">{this.state.date.toDateString()}</h6>
      </div>
    );
  }
}

//Hilfe von https://reactjs.org/docs/forms.html
class DateTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueDate: {}, valueTime: {} };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  buttonClick(event) {
    event.preventDefault();
    if(this.state.valueDate != null){
      if(this.state.valueTime != null){
        goalForCalculations = this.state.valueDate + this.state.valueTime;
      } else {
        goalForCalculations = this.state.valueDate;
      }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <label className="layout-form" >Date:
          <input name="valueDate" type="date" className="rounded form-control" value={this.state.valueDate} onChange={this.handleInputChange} />
        </label>
        <label className="layout-form" >Time:
          <input name="valueTime" type="time" className="rounded form-control" value={this.state.valueTime} onChange={this.handleInputChange} />
        </label>
        <button type="button" className="btn btn-secondary layout-form" onClick={this.buttonClick}>Enter</button>
      </div>
    );
  }
}


class Calculations extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.goal != null) {
    this.state = { timeRemaining: {}, today: new Date(), goal: new Date(this.props.goal) };
      this.getTimeRemaining = this.getTimeRemaining.bind(this);
      this.setState = { timeRemaining: this.getTimeRemaining() }
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState = { today: new Date() }
  }

  getTimeRemaining() {
    if (this.props.goal != null) {
      var distance = this.state.goal.getTime() - this.state.today.getTime();
      console.log("Distance was calculated: " + { distance });

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
  render() {
    if (this.props.goal == null) {
      return (
        <h2 className='display-3 text-center'>Bitte wählen Sie ein Datum und eine Zeit.</h2>
      )
    } else {
      return (
        <div>
          <h2 className="display-2 text-center">{this.days} days, {this.hours} hours, {this.minutes} minutes and {this.seconds} seconds</h2>
        </div>
      );
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Site />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
