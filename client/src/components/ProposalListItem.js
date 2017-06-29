import React from 'react'
import {Col, Card, Modal} from 'react-materialize'
// import { Link } from 'react-router-dom';


class ProposalListItem extends React.Component {
   constructor(props) {
     super(props)

     this.updateVotes = this.updateVotes.bind(this)
     this.getVotes = this.getVotes.bind(this)

     this.state = {
        images: [],
        votes: 0
     }
   }

   componentWillMount(){
      console.log('VILL MOUNT');
      this.getVotes()
   }

   getImages(event){
      let id = this.props.proposal.id
     if (event.target.className == 'modalClick'){
        fetch(`/api/images/${id}`)
        .then(res => res.json())
        .then(images => {
           this.setState({
             images:images
          })
        })
     }
   }

   updateVotes (){
      //adds one vote to the proposal if user upvotes it
      console.log('updating');
      let proposalId = this.props.proposal.id
      let userId = 5
      let body = { proposalId, userId }
      fetch('/api/votes',{
        method:"POST",
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
         body: JSON.stringify(body)
      }).then((res) => res.json())
      .then((res) => {
         console.log('added this maybe',res)
         let valid = res
         let id = this.props.proposal.id
         let body = { id }
         console.log('valid', valid);
         //this grabs the number of votes on a specific proposal
         fetch(`/api/votes/${id}`,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
               },
            body: JSON.stringify(body)
         })
         .then(res => res.json())
         .then(num => {
            this.setState({
               votes: num
            })
            console.log('this is the number', num);
            // console.log('can i get id?', id);
            if (valid){
            fetch(`/api/proposals/${id}`,{
               method:"POST",
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
                  },
            }).then(res => res.json())
               .then((res) => {
                  console.log('this is vote res', res);
               })
            }
         })
      })
   }

   render (){
      return (
         <div className="proposalItem container">
            <Col m={6} s={12} onClick={this.getImages.bind(this)}>
               <Card className='cyan lighten-5 proposalsCard'
               onChange={this.getVotes()}
                textClassName='black-text' title= {this.props.proposal.title } actions={[
                   <Modal
                    key={this.props.proposal.id}
                  	header={this.props.proposal.title}
                     trigger={ <a href="#" className="modalClick"
                      >Click For More</a> }>
                     <p>{this.props.proposal.story}</p>
                     <img src={this.state.images} width="300px"  />
                   </Modal>
               ]}>
               <div id="voteCount"> {this.state.votes} </div>
               <div id="upvote" data="1" onClick={ this.updateVotes }> updoot </div>
               <div className="proposalSummary">
                  { this.props.proposal.summary }
               </div>
               </Card>
            </Col>
         </div>
      )
   }

   getVotes(){
      let id = this.props.proposal.id
      let body = { id }
      fetch(`/api/votes/${id}`,{
         method:"POST",
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            },
         body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(num => {
         // console.log( this.props.proposal.title, id, num);
         this.setState({
            votes: num
         })
      })
   }

}


export default ProposalListItem
