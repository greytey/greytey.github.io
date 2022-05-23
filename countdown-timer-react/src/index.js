import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    this.state = {valueDate: 'DD.MM.YYYY', valueTime: 'HH:MM'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class="layout-form" >Date: <input type="date" class="rounded form-control" value={this.state.valueDate} /></label>
        <label class="layout-form" >Time: <input type="time" class="rounded form-control" value={this.state.valueTime} /></label>
        <input type="submit" class="btn btn-secondary layout-form" value="Submit" />
      </form>
    );
  }
}
const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<DateTimeForm />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
