import React from 'react'
import ProposalListItem from './ProposalListItem'

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
   //   this.setState({ 'ads': sortedAds });
   }

   filterProposals(term, proposals){
     let filteredProposals = []
     for (let prop of this.state.proposals) {
       if (prop.title.includes(term) || prop.description.includes(term)) {
         console.log(prop.title, 'HIIIIIIIIIIII', prop.description);
         filteredProposals.push(prop)
       }
     }

   //   this.setState({ 'ads': filteredAds })
   }


   render(){

      let el = null
      if (this.props.proposals.length > 0){
         let ProposalItems =
         this.props.proposals.map((proposal, i)=> {
            return (
               <ProposalListItem key={i} data={i + 1} proposal={proposal} />
            )
         })
         el = ProposalItems
      }

      return (
         <div>
            {el}
         </div>
      )
   }
}

export default ProposalList
