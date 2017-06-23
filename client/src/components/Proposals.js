import React from 'react'

class Proposals extends React.Component {

   render(){
      return (
      <div>
         <div className="container">
            <div id="timbo"> Proposals!!</div>
            <button className="btn"> im a button NeW </button>
            <div className="input-field col s6">
              <input placeholder="Filter" id="first_name" type="text" className="validate"></input>
            </div>
            <div className="input-field col s12">
              <select>
                <option value disabled selected>Choose your option</option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>
         </div>
      </div>
      )
   }

}

export default Proposals
