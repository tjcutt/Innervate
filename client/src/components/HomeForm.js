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
    this.signupToggle = this.signupToggle.bind(this)
    this.loginToggle = this.loginToggle.bind(this)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      pass: '',
      show: false,
      adminPass: '',
      redirect: false,
      redirectReviewer: false,
      signupShow: false,
      loginShow: false
    }
  }
  handleRedirect(){
    if(this.state.redirect){
      return <Redirect to='/survey'></Redirect>;
    } else if (this.state.redirectReviewer){
      return <Redirect to='/proposals'></Redirect>
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
    }

    signupToggle(){
      this.setState({
        signupShow: !this.state.signupShow
      })
    }

    loginToggle(){
      this.setState({
        signupShow: !this.state.signupShow
      })
    }


    submitClick(event, res) {
      event.preventDefault();
        fetch('/api/homeForm',{
          method:"POST",
          credentials:'include',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
          body:JSON.stringify(this.state)
        })
          .then((res) => res.json())
          .then(tokens => {
            const cookies = new Cookies()
            cookies.set('user', tokens[0])
            if (tokens.length >1){
              cookies.set('role', tokens[1])
              this.setState({
                redirectReviewer:true
              })
            }
            this.setState({
             redirect:true
           })
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
             redirectReviewer:true
           })
         })
    }

  render() {
    return (

      <div >
          <div className = "loginContainer container">
              <div className="input-field  ">
                  <input id="loginEmail" placeholder="Enter your email" onChange={this.setEmail} className="homeInput validate" type="email" />
                  <label htmlFor="loginEmail"></label>
              </div>

              <div className="input-field ">
                  <input placeholder="Enter your password" onChange={this.setPass} className="homeInput validate" type="password" />
                  <label htmlFor="first_name"></label>
              </div>

              <div> <a onClick={this.handleLoginClick.bind(this)} className="loginBtn waves-effect waves-light  center btn grey darken-2">Login</a></div>

              {this.handleRedirect()}
          </div>

          <div>
              <div className="homeFormContainer container font1 col m5 l5 ">

                  <form className="signupForm" onSubmit={this.submitClick}>

                      <h4 className="center formSubtitle">Sign Up</h4>

                      <div className="input-field ">
                          <input id="first-name" onChange={this.setFirst} name="first-name" type="text" className="validate" />
                          <label htmlFor="first-name"> First name</label>
                      </div>

                      <div className="input-field ">
                          <input id="last-name" onChange={this.setLast} name="last-name" type="text" className="validate" />
                          <label htmlFor="last-name"> Last name</label>
                      </div>

                      <div className="input-field ">
                          <input id="email" onChange={this.setEmail} name="email" type="email" className="validate" />
                          <label htmlFor="email"> Email</label>
                      </div>

                      <div className="input-field ">
                          <input id="password" onChange={this.setPass} type="password" className="validate" />
                          <label htmlFor="password"> Password</label>
                      </div>

                      <ToggleDisplay if={this.state.show} tag="section">
                          <div className="input-field ">
                              <input id="adminPass" onChange={this.checkAdminPass} type="password" className="validate" />
                              <label htmlFor="adminPass">Admin Password</label>
                          </div>
                      </ToggleDisplay>

                      <div className = "bottomForm">
                      <button type="submit" className="waves-effect grey text-center lighten-5 btn signupBtn grey darken-2" onClick={this.submitClick}>Submit</button>

                      <button type="button" className="adminRef text-center waves-effect btn signupBtn" onClick={()=> this.setShow()}>Admin?</button>

                      </div>

                  </form>
                  {this.handleRedirect()}
              </div>

              <div className="signupStatement">
                  <h5 className="statement center">If you do not have an account,</h5>
                  <h5 className="statement center">please signup below </h5>
               </div>

              <button className=" center  waves-effect waves-light btn lgSignupBtn grey darken-2" onClick={()=> this.signupToggle()}> Sign Up</button>

              <ToggleDisplay if={this.state.signupShow} tag="section">
                  <div className="btmHomeForm container font1 ">

                      <form className="signpForm" onSubmit={this.submitClick}>

                          <h4 className="center formSubtitle">Sign Up</h4>

                          <div className="input-field ">
                              <input id="first-name" onChange={this.setFirst} name="first-name" type="text" className="validate" />
                              <label htmlFor="first-name"> First name</label>
                          </div>

                          <div className="input-field ">
                              <input id="last-name" onChange={this.setLast} name="last-name" type="text" className="validate" />
                              <label htmlFor="last-name"> Last name</label>
                          </div>

                          <div className="input-field ">
                              <input id="email" onChange={this.setEmail} name="email" type="email" className="validate" />
                              <label htmlFor="email"> Email</label>
                          </div>

                          <div className="input-field ">
                              <input id="password" onChange={this.setPass} type="password" className="validate" />
                              <label htmlFor="password"> Password</label>
                          </div>

                          <ToggleDisplay if={this.state.show} tag="section">
                              <div className="input-field ">
                                  <input id="adminPass" onChange={this.checkAdminPass} type="password" className="validate" />
                                  <label htmlFor="adminPass">Admin Password</label>
                              </div>
                          </ToggleDisplay>

                          <div className = "bottomForm">
                          <button type="submit" className="waves-effect grey text-center lighten-5 btn signupBtn grey darken-2" onClick={this.submitClick}>Submit</button>

                          <button type="button" className="adminRef text-center waves-effect btn signupBtn" onClick={()=> this.setShow()}>Admin?</button>

                          </div>

                      </form>

                      {this.handleRedirect()}

                  </div>
              </ToggleDisplay>
          </div>
      </div>
    );
  }
}

export default HomeForm
