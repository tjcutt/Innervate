import React from 'react';
import { Link } from 'react-router-dom';

class HomeForm extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className="homeForm container font1 col m6 l6 hide-on-small-and-down">

          <h4 className="center formSubtitle">Sign Up</h4>

          <div className="input-field ">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Enter your email</label>
          </div>

          <div className="input-field ">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Enter a password</label>
          </div>

          <div className="input-field ">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Confirm your password</label>
          </div>

        </div>
      </div>
    );
  }
}

export default HomeForm
