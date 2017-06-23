import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';
import HomeNav from './components/HomeNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav />
        <Link to="/proposals"> PROProsals </Link>
      </div>
    );
  }
}

export default App;
