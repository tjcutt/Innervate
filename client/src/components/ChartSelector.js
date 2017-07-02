import React, { Component } from 'react'
import {Input} from 'react-materialize'

class ChartSelector extends React.Component {
   constructor(props) {
     super(props)
   //   this.sortProposals = this.sortProposals.bind(this)
   }

   componentWillMount(){
      // this.selectData('created_at', this.props.proposals)
   }

   render() {
          console.log("WE ARE IN graphselector");
     // this.sortAds('created_at')
     
     return (
       <div className="sort-section sort ChartSelector">
          <Input s={8} m={8} l={8} id="sort" type='select' label="Datal Selector" defaultValue='' onChange={this.handleChange.bind(this)}>
             <option value='userRole'>Users by Role</option>
             <option value='proposalSolution'>Proposals by Solutions</option>
             <option value='proposalDisorder'>Proposals by Disorders</option>
             <option value='proposalAffliction'>Proposals by Afflictions</option>
          </Input>
       </div>
     )
   }
   handleChange(event){
     console.log('Handling SELCTOR, which is', event.target.value);
     let selector = event.target.value
     this.props.selectData(selector)
   }


}

export default ChartSelector
