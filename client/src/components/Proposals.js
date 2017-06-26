import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Input, Row, Col} from 'react-grid-system'
import {Input} from 'react-materialize'
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
         console.log('pops', this.state.proposals);
         this.setState({
          proposals:proposals
         })
      })
   }
   render(){
      console.log('render', this.state.proposals);
      return (
      <div>
         <div className="container">
            <div className="row">
               <div className="componentTitle"> Proposals</div>
               <button className="btn newBtn">New Proposal</button>
            </div>
            <div className="row">
               <div className="input-field col s4 m4 l6">
                <input id="filter" type="text" className="validate" />
                <label htmlFor="filter">Filter</label>
               </div>
               <Input s={4} type='select' label="Sort" defaultValue=''>
            		<option value='popular'>Popular</option>
            		<option value='new'>New</option>
            		<option value='something'>Something</option>
            	</Input>
            </div>
         </div>
         <div className="container">
            <ProposalList proposals={this.state.proposals}/>
         </div>
      </div>
      )
   }

}

export default Proposals
