import React from 'react'
import {Col, Card, Modal} from 'react-materialize'
// import { Link } from 'react-router-dom';


class ProposalListItem extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
        images: []
     }
   }


   getImages(event){
     let id = this.props.proposal.id
     if (event.target.className == 'modalClick'){
        console.log('wait i actually am gr8');
        fetch(`/api/images/${id}`)
        .then(res => res.json())
        .then(images => {
           console.log('pops', images);
           this.setState({
             images:images
          })
        })
     }
   }


   render (){
      console.log('thisstate', this.state.images);
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
                     <img src={this.state.images} width="300px"  />
                   </Modal>
               ]}>
               <div> up </div><div> down </div>
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
