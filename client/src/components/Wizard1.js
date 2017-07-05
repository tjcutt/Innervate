import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import injectTapEventPlugin from 'react-tap-event-plugin';

const disorders = ["Stroke","Brain Injury","Alzheimer's Disease and Other Dementias","Epilepsy","Parkinson's Disease","Autism Spectrum Disorders and Other Neurodevelopmental Disorders","Multiple Sclerosis","ALS and Other Neurodegenerative Disorders","Spinal Cord Injury","Migraine/Pain"];

const afflictions = ["Motor Skills","Sensory Deficits","Language/Speech Barriers","Safety Issues","Medication Adherence","Sleep Disturbance","Working","Transportation"];

const solutions = ["Assistive Devices","Biomarker Development","Alert Systems","Integrating Existing Systems/Data Analytics","Services","Apps"];

class WizardOne extends React.Component{
  state = {
    disorders: [],
    afflictions: [],
    solutions:[],
    title: '',
    story: '',
    summary: '',
    redirect:false,
    finished:false,
    stepIndex:0,
    hasCookies:true
  };

  constructor(props){
    super(props);
    this.handleDisorderChange = this.handleDisorderChange.bind(this)
    this.handleSolutionChange = this.handleSolutionChange.bind(this)
    this.handleAfflictionChange = this.handleAfflictionChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleSummaryChange = this.handleSummaryChange.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
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
    if(this.state.redirect){
      return <Redirect to='/wizard2'></Redirect>;
    }
  }
  handleClick(event) {
    fetch('/api/wizard1',{
      method:"POST",
      credentials:"include",
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
      body:JSON.stringify(this.state)
    }).then(res => res.json())
    .then(tokens => {
      const cookies = new Cookies()
      cookies.set('proposal_id', tokens.proposal_id)
      this.setState({
        redirect:true
      })
    })
  }

  handleDisorderChange(event, index, disorders){
    this.setState({disorders});
  }
  handleSolutionChange(event, index, solutions){
    this.setState({solutions});
  }
  handleAfflictionChange(event, index, afflictions){
    this.setState({afflictions});
  }
  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handleStoryChange(event){
    this.setState({story: event.target.value});
  }
  handleSummaryChange(event){
    this.setState({summary: event.target.value});
  }
  disorderItems(values) {
    return disorders.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }
  afflictionItems(values) {
    return afflictions.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }
  solutionItems(values) {
    return solutions.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }
  render() {
    const {disorders, afflictions, solutions, title, summary, story, redirect, finished, stepIndex} = this.state;
    return (
      <MuiThemeProvider>
        <div className="container wizard1">
          {this.handleRedirect()}
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
            <h3 className="center-align" id="gstarted">Getting Started</h3><br/>
            <div className="col s12">
              <h5>Enter a title for your proposal</h5>
              <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Enter title..." type="text" className="validate"/>
            </div>
            <div className="col s12">
              <h5>Describe your proposal in three sentences or less...</h5>
              <input value={this.state.summary} onChange={this.handleSummaryChange} placeholder="Enter summary..." type="text" className="validate"/>
              <h5>Specify the neurological disorder your proposal targets:</h5>
            </div>
            <div className="col s12">
              <SelectField
                multiple={true}
                fullWidth={true}
                hintText="Select disorders"
                value={disorders}
                onChange={this.handleDisorderChange}>
                {this.disorderItems(disorders)}
              </SelectField>
            </div>
            <div className="col s12">
              <p>
                <input className="with-gap" name="other" type="radio" id="other" />
                <label htmlFor="other">Other: </label>
              </p>
            </div>
            <div className="col s12">
              <input id="first_name" type="text" className="validate right"/>
            </div>
              <div className="col s12">
                <h5>Select the challenges your proposal aims to help:</h5>
                <SelectField
                  multiple={true}
                  fullWidth={true}
                  hintText="Select challenges"
                  value={afflictions}
                  onChange={this.handleAfflictionChange}>
                  {this.afflictionItems(afflictions)}
                </SelectField>
              </div>
              <div className="col s12">
                <h5>Select the category of solutions your proposal fits most:</h5>
                <SelectField
                  multiple={true}
                  fullWidth={true}
                  hintText="Select solutions"
                  value={solutions}
                  onChange={this.handleSolutionChange}>
                  {this.solutionItems(solutions)}
                </SelectField>
              </div>
            <div className="input-field col s12">
              <h5>Tell us your personal story/how this would benefit people</h5>
              <textarea value={this.state.story} onChange={this.handleStoryChange} id="textarea1" className="materialize-textarea"></textarea>
            </div>
            <div className="col s12">
              <button className="waves-effect grey text-center lighten-5 btn right grey darken-2" type="submit" onClick={this.handleClick} name="action">Next
              </button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default WizardOne
