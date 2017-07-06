import React from 'react'
import ProposalListItem from './ProposalListItem'
import Filter from './Filter'
import Sort from './Sort'
import { Redirect } from 'react-router-dom';

class ProposalList extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals: this.props.proposals,
       userRole: ''
     }
     this.sortProposals = this.sortProposals.bind(this)
     this.filterProposals = this.filterProposals.bind(this)
     this.getRole = this.getRole.bind(this)

   }

   componentWillMount(){
      this.sortProposals('created_at', this.props.proposals)
      this.getRole()
   }

   sortProposals = (field, proposals) => {
     let sortedProposals = this.state.proposals.sort( (a, b) => {
       if (a[field] < b[field]) {
         return 1;
       }
       if (a[field] > b[field]) {
         return -1;
       }
       return 0;
     });
     this.setState({ proposals: sortedProposals });
   }

   filterProposals(term, proposals){
     let filteredProposals = []
     for (let prop of proposals) {
       if (prop.title.toLowerCase().includes(term.toLowerCase()) || prop.summary.toLowerCase().includes(term.toLowerCase())) {
         filteredProposals.push(prop)
       }
     }

     this.setState({ proposals: filteredProposals })
   }


   render(){

      let el = null
      if (this.state.proposals.length > 0){
         let ProposalItems =
         this.state.proposals.map((proposal, i)=> {
            return (
               <ProposalListItem key={i} data={i + 1} proposal={proposal} userRole={this.state.userRole}  />
            )
         })
         el = ProposalItems
      }
      return (
         <div>
            <div className="row sortFilter">
               <div className="container">
                  <div className="row flexxy">
                     <Filter  className="flexu" proposals={this.props.proposals} filterProposals={this.filterProposals.bind(this)}  />
                     <Sort  className="flexu" id="sort" proposals={this.props.proposals} sortProposals={this.sortProposals}  />
                        <a href="wizard1" className="flexu" ><button className="btn newBtn  light-blue darken-2">New Proposal</button></a>
                  </div>
               </div>
            </div>
            <div className="">
               {el}
            </div>
         </div>
      )
   }

   getRole(){
      fetch(`/api/role/`,{
         method:"GET",
         credentials: 'include',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
      })
      .then(res => res.json())
      .then(data => {
         this.setState({
            userRole: data
         })
      })
   }
}

export default ProposalList
