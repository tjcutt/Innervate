import React from 'react'
import {Col, Card} from 'react-materialize'


const ProposalListItem = ({ proposal }) => {
   console.log('prop item poppy', proposal)
   return (
      <div className="proposalItem container">
         <Col m={6} s={12}>
            <Card className='cyan lighten-4 proposalsCard' textClassName='black-text' title= {proposal.title } actions={[<a href='#'>Click for More</a>]}>
            <div className="proposalSummary">
               {  proposal.summary }
            </div>
            </Card>
         </Col>
      </div>
   )
}

export default ProposalListItem
