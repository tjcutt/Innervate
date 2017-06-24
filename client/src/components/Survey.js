import React from 'react';
import SurveyRole from './SurveyRole';
import SurveyDisorder from './SurveyDisorder';
import SurveyReferral from './SurveyReferral';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Survey extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    fetch('/api/survey',{
      method:"GET",
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           }
    }).then(res => console.log(res));
  }
  render(){
    return (
      <MuiThemeProvider>
        <div className="row">
          <h3 className="center">Tell Us About Yourself</h3>
          <div className="container">
            <SurveyRole />
            <SurveyDisorder />
            <SurveyReferral />
            <div className="col l12">
              <button className="btn waves-effect waves-light right" onClick={this.handleClick} name="action">Next
              </button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default Survey
