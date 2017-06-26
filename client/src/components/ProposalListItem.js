import React from 'react'
import {Col, Card, Modal, Button} from 'react-materialize'


const ProposalListItem = ({ proposal }) => {
   console.log('prop item poppy', proposal)
   return (
      <div className="proposalItem container">
         <Col m={6} s={12}>
            <Card className='cyan lighten-4 proposalsCard' textClassName='black-text' title= {proposal.title } actions={
                <Modal
               	header={proposal.title}
                  trigger={ <a href="#">Click For More</a> }>
                  <p>{proposal.story}</p>
                </Modal>
            }>
            <div className="proposalSummary">
               {  proposal.summary }
            </div>
            </Card>
         </Col>
      </div>
   )
}

export default ProposalListItem
