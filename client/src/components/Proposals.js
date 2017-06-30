import React from 'react'

import ProposalList from './ProposalList'

class Proposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }

   componentWillMount() {
      fetch(`/api/proposals`, {
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
      if (this.state.proposals.length == 0){
         return (
            <div className="container propMain">
               <div className="row">
                  <div className="componentTitle"> Proposals</div>
                  <button className="btn newBtn cyan lighten-3">New Proposal</button>
               </div>
            </div>
         )

      }

      return (
      <div>
         <div className="container propMain">
            <div className="row">
               <div className="componentTitle"> Proposals</div>
               <button className="btn newBtn  light-blue lighten-2">New Proposal</button>
            </div>
            <ProposalList proposals={this.state.proposals}/>
         </div>
      </div>
      )
   }

}

export default Proposals
