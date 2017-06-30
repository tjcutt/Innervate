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
      this.getVotes()
   }

   shouldComponentUpdate(nextProps, nextState){
   if (this.state.votes !== nextState.votes){
      return true
   }
   if (this.props.proposal.title === nextProps.proposal.title){
      if (this.state.images !== nextState.images) return true
      else return false
   }
   return true
   }


   getImages(event){
      console.log('CLIKING');
      let id = this.props.proposal.id
     if (event.target.className == 'modalClick'){
        fetch(`/api/images/${id}`)
        .then(res => res.json())
        .then(images => {
           console.log('IMAGES?', images);
           this.setState({
             images:images
          })
        })
     }
   }

   updateVotes (){
      //adds one vote to the proposal if user upvotes it
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
         let valid = res
         let id = this.props.proposal.id
         let body = { id }
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
               })
            }
         })
      })
   }

   render (){
      console.log('state images!!', this.state.images);
      this.getVotes()
      return (
         <div className="proposalItem container">
            <Col m={6} s={12} onClick={this.getImages.bind(this)}>
               <Card className='grey lighten-4 proposalsCard'
                textClassName='black-text' title="" actions={[
                   <Modal
                    key={this.props.proposal.id}
                  	header={this.props.proposal.title}
                     trigger={
                        <div>
                           <div id="voteCount"> {this.state.votes} </div>
                           <div id="upvote" data="1" onClick={ this.updateVotes }> updoot </div>
                           <a href="#" className="modalClick"
                           >Click For More</a>
                      </div>
                     }>
                      <br /><br />
                      <p id="modalText"> Summary:</p><br />
                     <p id="modalText">{this.props.proposal.summary}</p>
                     <br /><br />
                      <p id="modalText"> Story:</p><br />
                     <p id="modalText">{this.props.proposal.story}</p>
                     <br /><br />
                     <p id="modalText"> Images:</p><br />
                     <img src={this.state.images} width="300px"  />
                   </Modal>
               ]}>
               <h3 className="modalCardTitle">{this.props.proposal.title}</h3>
               <br />
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
