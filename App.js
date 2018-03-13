import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import CreateImage from './ImageSubmit.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { note: '', value: '' };

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ note: this.state.value });
    this.setState({ value: this.state.value });
  }

  handleDelete = () => this.setState({ note: '' });

  render() {
    const { note } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <div><a href="">Login</a></div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <label>
              Notes:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="button" value="Delete" onClick={this.handleDelete} />
            </label>
          </form>
          <div>
            <p>{note}</p>
          </div>
          <img src='' alt="stuff" />
        </div>
      </div>
    );
  }
}

export default App;