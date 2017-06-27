import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import './App.css';
import HomeNav from './components/HomeNav'
import HomeInfo from './components/HomeInfo'
import HomeForm from './components/HomeForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav />
        <div className="row">
        <HomeInfo />
        <HomeForm />
        </div>
      </div>
    );
  }
}

export default App;
