import React from 'react'

const ProposalListItem = ({ proposal }) => {
   console.log('prop item poppy', proposal)
   return (
      <div className="proposalItem container">
         {proposal.title} <br /><br />
         {proposal.summary}
      </div>
   )
}

export default ProposalListItem
