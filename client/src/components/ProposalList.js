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
     console.log('firing sort prop funk');
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
     console.log('firing filter prop funk');
     let filteredProposals = []
     for (let prop of this.state.proposals) {
       if (prop.title.includes(term) || prop.summary.includes(term)) {
         console.log('this title passes', prop.title);
         console.log('filtered proposals in func', filteredProposals);
         filteredProposals.push(prop)
       }
     }

     this.setState({ proposals: filteredProposals })
   }


   render(){
      console.log('in render poposal list STATE', this.state.proposals);
      console.log('in render poposal list PROP', this.props.proposals);

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
               <Filter proposals={this.props.proposals} filterProposals={this.filterProposals.bind(this)}  />
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
