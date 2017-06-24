import React from 'react';

class SurveyReferral extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
       <div className="row">
         <h5>Where did you hear about us?</h5>
         <div className="col l4">
           <p>
             <input className="with-gap" name="referral" type="radio" id="baylor" />
             <label htmlFor="baylor">Baylor University</label>
           </p>
         </div>
         <div className="col l4">
           <p>
             <input className="with-gap" name="referral" type="radio" id="cu-med" />
             <label htmlFor="cu-med">University of Colorado School of Medicine</label>
           </p>
         </div>
         <div className="col l4">
           <p>
             <input className="with-gap" name="referral" type="radio" id="child-hosp" />
             <label htmlFor="child-hosp">Children&#39;s Hospital Colorado</label>
           </p>
         </div>
       </div>
    );
  }
}

export default SurveyReferral
