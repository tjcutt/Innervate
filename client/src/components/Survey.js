import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const disorders = [
  "Stroke","Brain Injury","Alzheimer's Disease and Other Dementias","Epilepsy","Parkinson's Disease","Autism Spectrum Disorders and Other Neurodevelopmental Disorders","Multiple Sclerosis","ALS and Other Neurodegenerative Disorders","Spinal Cord Injury","Migraine/Pain"
];

class Survey extends React.Component {
  state = {
    values: [],
    role: 'Patient',
    referral: 'Baylor University'
  };

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.handleReferralChange = this.handleReferralChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, index, values){
    this.setState({values});
  }
  handleRoleChange(role) {
    this.setState({
      role: role.target.value
    });
  }
  handleReferralChange(referral) {
    this.setState({
      referral: referral.target.value
    });
  }
  menuItems(values) {
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

  handleClick(event) {
    fetch('/api/survey',{
      method:"POST",
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
      body:JSON.stringify(this.state)
    }).then(res => console.log(res))
  }
  render(){
    const {values, role, referral} = this.state;
    return (
      <MuiThemeProvider>
        <div className="row">
          <h3 className="center">Tell Us About Yourself</h3>
          <div className="container">
            <h5>Specify your role...</h5>
            <div className="col l3">
              <p>
                <input className="with-gap" name="role" type="radio" id="patient" value="Patient" checked={this.state.role === 'Patient'} onChange={this.handleRoleChange}/>
                <label htmlFor="patient">Patient</label>
              </p>
            </div>
            <div className="col l3">
              <p>
                <input className="with-gap" name="role" type="radio" id="family" value="Family" checked={this.state.role === 'Family'} onChange={this.handleRoleChange}/>
                <label htmlFor="family">Family</label>
              </p>
            </div>
            <div className="col l3">
              <p>
                <input className="with-gap" name="role" type="radio" id="caregiver" value="Caregiver" checked={this.state.role === 'Caregiver'} onChange={this.handleRoleChange}/>
                <label htmlFor="caregiver">Caregiver</label>
              </p>
            </div>
            <div className="col l3">
              <p>
                <input className="with-gap" name="role" type="radio" id="medprof" value="Medical Professional" checked={this.state.role === 'Medical Professional'} onChange={this.handleRoleChange} />
                <label htmlFor="medprof">Medical Professional</label>
              </p>
            </div>
            <br/>
            <h5>Specify the neurological disorder you have or care of:</h5>
            <div className="col l8">
              <SelectField
                multiple={true}
                fullWidth={true}
                hintText="Select disorders"
                value={values}
                onChange={this.handleChange}>
                {this.menuItems(values)}
              </SelectField>
            </div>
            <div className="col l4">
              <p>
                <input className="with-gap" name="other" type="radio" id="other" />
                <label htmlFor="other">Other: </label>
                <input id="first_name" type="text" className="validate right"/>
              </p>
            </div>
            <h5>Where did you hear about us?</h5>
            <div className="col l4">
              <p>
                <input className="with-gap" name="referral" type="radio" id="baylor" value="Baylor University" checked={this.state.referral === 'Baylor University'} onChange={this.handleReferralChange}/>
                <label htmlFor="baylor">Baylor University</label>
              </p>
            </div>
            <div className="col l4">
              <p>
                <input className="with-gap" name="referral" type="radio" id="cu-med" value="University of Colorado School of Medicine" checked={this.state.referral === 'University of Colorado School of Medicine'} onChange={this.handleReferralChange}/>
                <label htmlFor="cu-med">University of Colorado School of Medicine</label>
              </p>
            </div>
            <div className="col l4">
              <p>
                <input className="with-gap" name="referral" type="radio" id="child-hosp" value="Children's Hospital Colorado" checked={this.state.referral === "Children's Hospital Colorado"} onChange={this.handleReferralChange}/>
                <label htmlFor="child-hosp">Children&#39;s Hospital Colorado</label>
              </p>
            </div>
            <div className="col l12">
              <button className="btn waves-effect waves-light right" type="submit" onClick={this.handleClick} name="action">Next
              </button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default Survey
