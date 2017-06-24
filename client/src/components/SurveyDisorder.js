import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

const disorders = [
  "Stroke","Brain Injury","Alzheimer's Disease and Other Dementias","Epilepsy","Parkinson's Disease","Autism Spectrum Disorders and Other Neurodevelopmental Disorders","Multiple Sclerosis","ALS and Other Neurodegenerative Disorders","Spinal Cord Injury","Migraine/Pain"
];

class SurveyDisorder extends React.Component{
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

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

  constructor(props){
    super(props);
  }

  render() {
    const {values} = this.state;
    return (
       <div className="row">
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
       </div>
    );
  }
}

export default SurveyDisorder
