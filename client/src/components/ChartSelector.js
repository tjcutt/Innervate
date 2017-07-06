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
     // this.sortAds('created_at')

     return (
       <div className="sort-section sort ChartSelector">
          <Input s={8} m={8} l={8} id="sort" className="chartDrop" type='select' label="Data Selector" defaultValue='' onChange={this.handleChange.bind(this)}>
             <option value='userRole'>Users by Role</option>
             <option value='proposalSolution'>Proposals by Solutions</option>
             <option value='proposalDisorder'>Proposals by Disorders</option>
             <option value='proposalAffliction'>Proposals by Challenges</option>
          </Input>
       </div>
     )
   }
   handleChange(event){
     let selector = event.target.value
     this.props.selectData(selector)
   }


}

export default ChartSelector
