import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Container, Row, Col} from 'react-grid-system'
import MultiSelect from "./MultiSelect"
import ProposalList from './ProposalList'

class Proposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }


   componentWillMount() {
      fetch(`/proposals`, {
         credentials:'include'
      })
      .then(res => res.json())
      .then(proposals => {
         this.setState({
          proposals:proposals
         })
      })
   }
   render(){

      return (
      <div>
         <div className="container">
            <div className="row">
               <h1 id="timbo"> Proposals!!
               <button className="btn newBtn">I am gr8</button></h1>
            </div>
            <div className="row">
               <MultiSelect  className="col s2 m2" />
               <div className="input-field col s4 m4 l6">
                <input id="filter" type="text" className="validate" />
                <label htmlFor="filter">Filter</label>
               </div>
            </div>
         </div>
         <div>
            <ProposalList proposals={this.state.proposals}/>
         </div>
      </div>
      )
   }

}

export default Proposals
