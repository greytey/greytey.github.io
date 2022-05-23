import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


//Uhr kopiert aus https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
        <h2 class="display-2">{this.state.date.toLocaleTimeString()}</h2>
        <h6 class="display-4">{this.state.date.toDateString()}</h6>
      </div>
    );
  }
}
const clock = ReactDOM.createRoot(document.getElementById('clock'));
clock.render(<Clock />);

//Hilfe von https://reactjs.org/docs/forms.html
class DateTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valueDate: {}, valueTime: {}};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const output = ReactDOM.createRoot(document.getElementById('output'));
    const element = <Calculations date = {this.state.valueDate} time = {this.state.valueTime} />;
    output.render(element);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class="layout-form" >Date: 
        <input name="valueDate" type="date" class="rounded form-control" value={this.state.valueDate} onChange={this.handleInputChange}/>
        </label>
        <label class="layout-form" >Time: 
        <input name="valueTime" type="time" class="rounded form-control" value={this.state.valueTime} onChange={this.handleInputChange} />
        </label>
        <input type="submit" class="btn btn-secondary layout-form" value="Submit" />
      </form>
    );
  }
}
const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<DateTimeForm />);

class Calculations extends React.Component{
  constructor(props) {
    super(props);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
    this.setState({timeRemaining : this.getTimeRemaining(this.props.date, this.props.time)})
  }

  componentDidMount() {
    this.goalDate = this.props.date.toDateString();
    this.goalTime = this.props.time;
    this.today = new Date();
    console.log("Mount: " + this.goalDate + " and " + this.goalTime);
    this.setState({timeRemaining : this.getTimeRemaining(this.goalDate, this.goalTime)})
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.today = new Date()
  }

  getTimeRemaining(goalDate, goalTime) {
    var goal = new Date(goalDate);
    goal.setHours(goalTime);
    var distance = goal.getTime() - this.today.getTime();
    console.log("Distance was calculated: " + {distance});

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  render() {
    return (
      <div>
        <h2 class="display-2 text-center">{this.days} days, {this.hours} hours, {this.minutes} minutes and {this.seconds} seconds</h2>
      </div>
    );
  }
}
Calculations.propTypes = {
  date : PropTypes.instanceOf(Date).isRequired,
  time : PropTypes.instanceOf(Date).isRequired
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
