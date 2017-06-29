import React from 'react';
import Cookies from 'universal-cookie';
// const bcrypt = require('bcryptjs');

// import { Link } from 'react-router-dom';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';

class HomeNav extends React.Component{

  constructor(props){
    super(props)

    this.setEmail = this.setEmail.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.setPass = this.setPass.bind(this)

    this.state = {
      email: '',
      hashed_pass: ''
    }
}

    setEmail(input){
      this.setState({
        email: input.target.value,
      })
    }

    setPass(input){
      this.setState({
        pass: input.target.value
      })
    }

    handleLoginClick (event, res) {
      event.preventDefault()
        fetch('/api/navLogin',{
          method:"POST",
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
          body:JSON.stringify(this.state)
        })
         .then(res => res.json())
         .then( tokens => {
           const cookies = new Cookies()
           cookies.set('user', tokens[0])
           const userToken = cookies.set('user', tokens[0])
           const roleToken = cookies.set('role', tokens[1])
           console.log('userToken', userToken, 'roleToken', roleToken)
         })
    }


  render() {
    return (
       <div>
        <nav>
            <div className="nav-wrapper font1 cyan lighten-3">
              <a className="logo smMargin">NPI</a>

              <ul id="nav-mobile" className="right col s5 hide-on-small-and-down">

                <li className="input-field col s6">
                 <input placeholder="Enter your email" onChange={this.setEmail} className="homeInput validate" type="email"/>
                 <label htmlFor="first_name"></label>
                </li>

                <li className="input-field col s5">
                  <input placeholder="Enter your password" onChange={this.setPass} className="homeInput validate" type="password"/>
                  <label htmlFor="first_name">First Name</label>
                </li>

                <li> <a onClick={this.handleLoginClick}
                   className="waves-effect waves-light btn grey darken-2">Login</a></li>

              </ul>
            </div>
          </nav>
        </div>
    );
  }

}

export default HomeNav
