import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

class HomeNav extends React.Component{

  constructor(props){
    super(props)

    this.setEmail = this.setEmail.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.setPass = this.setPass.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)

    this.state = {
      email: '',
      hashed_pass: '',
      redirect: false
    }
}

    handleRedirect(){
      if(this.state.redirect){
        return <Redirect to='/proposals'></Redirect>
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
           cookies.set('role', tokens[1])
           this.setState({
             redirect:true
           })
         })
    }


  render() {
    return (
       <div>
        <nav>
            <div className="nav-wrapper white-text font1">
              <a className="logo smMargin">Innervate</a>

              <ul id="nav-mobile" className="right col s12 hide-on-small-and-down">

                <li className="input-field homeNavInput col s5">
                 <input id="loginEmail" placeholder="Enter your email" onChange={this.setEmail} className="homeInput validate" type="email"/>
                 <label htmlFor="loginEmail"></label>
                </li>

                <li className="input-field homeNavInput col s5">
                  <input placeholder="Enter your password" onChange={this.setPass} className="homeInput validate" type="password"/>
                  <label htmlFor="first_name">First Name</label>
                </li>

                <li> <a onClick={this.handleLoginClick}
                   className="waves-effect waves-light homeNavBtn btn grey darken-2">Login</a></li>

              </ul>
            </div>
          </nav>
          {this.handleRedirect()}
        </div>
    );
  }

}

export default HomeNav
