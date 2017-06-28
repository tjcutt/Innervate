import React from 'react'
import ProposalListItem from './ProposalListItem'

const ProposalList = (props) => {

   let el = null
   if (props.proposals.length > 0){
      let ProposalItems =
      props.proposals.map((proposal, i)=> {
         return (
            <ProposalListItem key={i} data={i + 1} proposal={proposal} />
         )
      })
      el = ProposalItems
   }

   return (
      <div>
         {el}
      </div>
   )

   }

export default ProposalList
