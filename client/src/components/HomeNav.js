import React from 'react';
import { Link } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';

class HomeNav extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
       <div>
        <nav>
            <div className="nav-wrapper">
              <h1 className="brand-logo ">Logo</h1>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="input-field col s6">
                 <input placeholder="email" id="first_name" type="text" className="validate"/>
                 <label htmlFor="first_name">First Name</label>
                </li>

                <li className="input-field col s6">
                  <input placeholder="password" id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">First Name</label></li>
                <li> <a className="waves-effect waves-light btn">Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default HomeNav
