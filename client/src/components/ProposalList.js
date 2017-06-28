import React from 'react'
import ProposalListItem from './ProposalListItem'
import Filter from './Filter'
import Sort from './Sort'

class ProposalList extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals: this.props.proposals
     }
     this.sortProposals = this.sortProposals.bind(this)
     this.filterProposals = this.filterProposals.bind(this)
   }

   sortProposals = (field, proposals) => {
     // Sorting ...
     var sortedProposals = this.state.proposals.sort( (a, b) => {
       console.log("IN sortProposals", field);
       if (a[field] > b[field]) {
         return 1;
       }
       if (a[field] < b[field]) {
         return -1;
       }
       return 0;
     });

     // Then call setState
     this.setState({ proposals: sortedProposals });
   }

   filterProposals(term, proposals){
     let filteredProposals = []
     for (let prop of this.state.proposals) {
       if (prop.title.includes(term) || prop.description.includes(term)) {
         console.log(prop.title, 'HIIIIIIIIIIII', prop.description);
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
               <ProposalListItem key={i} data={i + 1} proposal={proposal} />
            )
         })
         el = ProposalItems
      }

      return (
         <div>
            <div className="row">
               <Filter proposals={this.props.proposals} filterAdsBy={this.filterProposals}  />
               <Sort proposals={this.props.proposals} sortProposals={this.sortProposals}  />
            </div>
            <div className="proposalsRow">
               {el}
            </div>
         </div>
      )
   }
}

export default ProposalList
