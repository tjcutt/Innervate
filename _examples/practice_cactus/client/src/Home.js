import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {



  render() {
    return (
      <div className="App">
        <h1>WELCOME, STRANGER, TO MY FANTASTIC WEBSITE</h1>
        <div>
          <Link to='/ads'>All Posts</Link>
        </div>
        <div></div>

      </div>
    );
  }
}

export default App;
