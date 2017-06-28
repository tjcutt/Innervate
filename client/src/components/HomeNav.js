import React from 'react';
// import { Link } from 'react-router-dom';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';

class HomeNav extends React.Component{

  render() {
    return (
       <div>
        <nav>
            <div className="nav-wrapper font1 cyan lighten-3">
              <a className="logo smMargin">NPI</a>
              <ul id="nav-mobile" className="right col s5 hide-on-small-and-down">
                <li className="input-field col s6">
                 <input placeholder="Enter your email" className="homeInput" type="text" className="validate"/>
                 <label htmlFor="first_name"></label>
                </li>

                <li className="input-field col s5">
                  <input placeholder="Enter your password" className="homeInput" type="text" className="validate"/>
                  <label htmlFor="first_name">First Name</label></li>
                <li> <a className="waves-effect waves-light btn grey darken-2">Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default HomeNav
