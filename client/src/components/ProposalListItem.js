import React from 'react'
import {Col, Card, Modal} from 'react-materialize'
import Cookies from 'universal-cookie';

// import { Link } from 'react-router-dom';


class ProposalListItem extends React.Component {
   constructor(props) {
     super(props)

     this.updateVotes = this.updateVotes.bind(this)
     this.getVotes = this.getVotes.bind(this)

     this.state = {
        images: [],
        votes: 0,
        userCookie: '',
        roleVotes: {}
     }
   }

   componentWillMount(){
      const cookies = new Cookies()
      this.setState({userCookie: cookies.get('user')})
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
      let proposalId = this.props.proposal.id
      let body = { proposalId }
      fetch('/api/votes',{
        method:"POST",
        credentials: 'include',
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
      this.getVotes()
      let el = null
      // console.log('list item roleid', this.props.userRole);
      if (this.props.userRole == 5) console.log('true'), el = <div> timbo tumbo </div>

      return (
         <div className="proposalItem container">
            <Col m={6} s={12} onClick={this.getImages.bind(this)}>
               <Card className='grey lighten-4 proposalsCard'
                textClassName='black-text' title="">
               <h3 className="modalCardTitle">{this.props.proposal.title}</h3>
               <br />
               <div className="proposalSummary">
                  { this.props.proposal.summary }
               </div>
               <div> { el } </div>
               <div id="line" />
               <div className="row cardBottom">
                  <div id="voteCount"> {this.state.votes} </div>
                  <div id="upvote" data="1" onClick={ this.updateVotes }> upvote </div> <Modal
                      key={this.props.proposal.id}
                       header={this.props.proposal.title}
                       trigger={
                          <div>
                             <a href="#" id="modalClick" className="modalClick"
                             >click for more</a>
                        </div>
                       }>
                        <br /><br />
                        <p id="modalText"> Summary:</p><br />
                       <p id="modalText" className="">{this.props.proposal.summary}</p>
                       <br /><br />
                        <p id="modalText"> Story:</p><br />
                       <p id="modalText">{this.props.proposal.story}</p>
                       <br /><br />
                       <p id="modalText"> Images:</p><br />
                       <img className="modalImg" src={this.state.images} width="300px"  />
                     </Modal>
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
            votes: num[0]
         })
      })
   }

}


export default ProposalListItem
