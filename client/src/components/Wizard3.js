import React from 'react';
import {
 Redirect
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
class WizardThree extends React.Component {
 state = {
   stepIndex:2,
   finished:false,
   hasCookies:true
 };


 constructor(props) {
  super(props);
 }
 componentWillMount() {
     const cookies = new Cookies()
     if(!cookies.get('user')){
       this.setState({
         hasCookies:false
       })
     }else{
       this.setState({userCookie: cookies.get('user')})
     }
 }
 handleRedirect(){
   if(!this.state.hasCookies){
     return <Redirect to='/'></Redirect>;
   }
 }

 render() {
   const {finished, stepIndex, hasCookies} = this.state;
  return (
    <MuiThemeProvider>
      <div className="container wizard3">
        {this.handleRedirect()}
        <div className="col s12 m12 l12">
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel>Done</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="col s12 m12 l12">
          <h1 className="center-align" id="congrats">Congratulations!</h1>
          <h3 className="center-align" id="">You have completed your proposal!</h3>
          <div id="done" className="col s12 right-align">
            <a href="/myproposals">Go to My Proposals </a>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
 }

}

export default WizardThree
