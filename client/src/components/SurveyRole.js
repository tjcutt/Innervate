import React from 'react';

class SurveyRole extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
       <div className="row">
         <h5>Specify your role...</h5>
         <div className="col l3">
           <p>
             <input className="with-gap" name="role" type="radio" id="patient" />
             <label htmlFor="patient">Patient</label>
           </p>
         </div>
         <div className="col l3">
           <p>
             <input className="with-gap" name="role" type="radio" id="family" />
             <label htmlFor="family">Family</label>
           </p>
         </div>
         <div className="col l3">
           <p>
             <input className="with-gap" name="role" type="radio" id="caregiver" />
             <label htmlFor="caregiver">Caregiver</label>
           </p>
         </div>
         <div className="col l3">
           <p>
             <input className="with-gap" name="role" type="radio" id="medprof" />
             <label htmlFor="medprof">Medical Professional</label>
           </p>
         </div>
         <br/>
       </div>
    );
  }
}

export default SurveyRole
