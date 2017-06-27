import React from 'react'
import {Col, Card, Modal} from 'react-materialize'
// import { Link } from 'react-router-dom';


class ProposalListItem extends React.Component {
   constructor(props) {
     super(props)
     this.state = {

     }
   }


   getImages(event){
     console.log('wow im not gr8', event.target.className, this.props.proposal.id)
     if (event.target.className == 'modalClick'){
        console.log('wait i actually am gr8');
        fetch(`/api/images`)
        .then(res => res.json())
        .then(images => {
           console.log('pops', images);
        })
     }
   }


   render (){
      return (
         <div className="proposalItem container">
            <Col m={6} s={12} onClick={this.getImages.bind(this)}>
               <Card className='cyan lighten-4 proposalsCard' textClassName='black-text' title= {this.props.proposal.title } actions={[
                   <Modal
                    key={this.props.proposal.id}
                  	header={this.props.proposal.title}
                     trigger={ <a href="#" className="modalClick"
                      >Click For More</a> }>
                     <p>{this.props.proposal.story}</p>
                   </Modal>
               ]}>
               <div className="proposalSummary">
                  {  this.props.proposal.summary }
               </div>
               </Card>
            </Col>
         </div>
      )
   }
}


export default ProposalListItem
