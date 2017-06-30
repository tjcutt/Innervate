import React from 'react'
import ProposalListItem from './ProposalListItem'

class ProposalList extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals: this.props.proposals
     }
   }


   render(){

      let el = null
      if (this.state.proposals.length > 0){
         let ProposalItems =
         this.state.proposals.map((proposal, i)=> {
            return (
               <ProposalListItem key={i} data={i + 1} proposal={proposal} />
            )
         })
         el = ProposalItems
      }

      return (
         <div>
            <div className="">
               {el}
            </div>
         </div>
      )
   }
}

export default ProposalList
