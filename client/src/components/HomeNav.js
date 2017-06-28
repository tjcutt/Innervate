import React from 'react';
import Cookies from 'react-cookie';
const bcrypt = require('bcryptjs');

// import { Link } from 'react-router-dom';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';

class HomeNav extends React.Component{

  constructor(props){
    super(props)

    this.setEmail = this.setEmail.bind(this)
    this.setHashedPass = this.setHashedPass.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)

    this.state = {
      email: '',
      hashed_pass: ''
    }
}



    setEmail(input){
      this.setState({
        email: input.target.value,
      })
      console.log(this.email);
    }

    setHashedPass(input){
      this.setState({
        hashed_pass: bcrypt.hashSync(input.target.value, 10),
      })
      console.log(this.hashed_pass);
    }


    handleLoginClick (event, res) {
      event.preventDefault()
      console.log('this.state', this.state)
        fetch('/api/navLogin',{
          method:"POST",
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
          body:JSON.stringify(this.state)
        })
         .then(res => res.json())
        //  .then(res => console.log('navLogin res', res))
         .then( tokens => {
           const cookies = new Cookies()
           const userToken = cookies.set('user', tokens[0], {httpOnly: true})
           const roleToken = cookies.set('role', tokens[1], {httpOnly: true})
          //  cookie.set('user', tokens[0], {httpOnly: true})
          //  cookie.set('role', tokens[1], {httpOnly: true})
           console.log('tokens', tokens)
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
                  <input placeholder="Enter your password" onChange={this.setHashedPass} className="homeInput validate" type="password"/>
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
