import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';


class HomeForm extends React.Component{
  constructor(props){
    super(props)

    this.submitClick = this.submitClick.bind(this)
    this.setFirst = this.setFirst.bind(this)
    this.setLast = this.setLast.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPass = this.setPass.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.setShow = this.setShow.bind(this)
    this.checkAdminPass = this.checkAdminPass.bind(this)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      hashed_pass: '',
      show: false,
      adminPass: '',
      redirect: false
    }
  }
  handleRedirect(){
    console.log('hey')
    if(this.state.redirect){
      return <Redirect to='/survey'></Redirect>;
    }
  }
    setFirst(input){
      this.setState({
        first_name: input.target.value
      })
    }

    setLast(input){
      this.setState({
        last_name: input.target.value
      })
    }

    setEmail(input){
      this.setState({
        email: input.target.value
      })
    }

    setPass(input){
      this.setState({
        pass: input.target.value
      })
    }

    setShow(){
      this.setState({
        show: !this.state.show
      })
    }

    checkAdminPass(input){
      this.setState({
        adminPass: input.target.value
      })
      console.log(this.state.adminPass);
    }


    submitClick(event) {
      event.preventDefault();
        fetch('/api/homeForm',{
          method:"POST",
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
          body:JSON.stringify(this.state)
        })
          .then(res => {
            console.log(res);
            res.json()
          })
          .then(tokens => {
            const cookies = new Cookies()
            const userToken = cookies.set('user', tokens)
            this.setState({
              redirect:true
            })
            console.log(this.state);
          })
    }
  // const {first_name, last_name, email, password} = this.state;

  render() {
    return (

        <div className="homeForm container font1 col m5 l5 hide-on-small-and-down">

          <form className="signpForm" onSubmit={this.submitClick}>

          <h4 className="center formSubtitle">Sign Up</h4>

          <div className="input-field ">
            <input id="first-name" onChange={this.setFirst} name="first-name" type="text" className="validate"/>
            <label htmlFor="first-name"> First name</label>
          </div>

          <div className="input-field ">
            <input id="last-name" onChange={this.setLast} name="last-name" type="text" className="validate"/>
            <label htmlFor="last-name"> Last name</label>
          </div>

          <div className="input-field ">
            <input id="email" onChange={this.setEmail} name="email" type="email" className="validate"/>
            <label htmlFor="email"> Email</label>
          </div>

          <div className="input-field ">
            <input id="password" onChange={this.setPass} type="password" className="validate"/>
            <label htmlFor="password"> Password</label>
          </div>

          <ToggleDisplay if={this.state.show} tag="section">
          <div className="input-field ">
              <input id="adminPass" onChange={this.checkAdminPass} type="password" className="validate"/>
              <label htmlFor="adminPass">Admin Password</label>
          </div>
          </ToggleDisplay>

          <a className="adminRef collapsible-header active" onClick={() => this.setShow()} href="#">Admin?</a>



          <button type="submit" className="waves-effect waves-light btn signupBtn grey darken-2" onClick={this.submitClick}>Submit</button>

          </form>
          {this.handleRedirect()}
        </div>
    );
  }
}

export default HomeForm
