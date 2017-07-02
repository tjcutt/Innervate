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
   finished:false
 };

 constructor(props) {
  super(props);
 }

 render() {
   const {finished, stepIndex} = this.state;
  return (
    <MuiThemeProvider>
      <div className="container wizard3">
        <div className="row">
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Getting Started</StepLabel>
            </Step>
            <Step>
              <StepLabel>Provide More Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Done</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="row">
          <h1 className="center-align" id="congrats">Congratulations!</h1>
          <h3 className="center-align" id="">You have completed your proposal!</h3>
          <div className="col l12">
            <a id="done" href="/myproposals">Go to My Proposals </a>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
 }

}

export default WizardThree
