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

   componentWillMount(){
      this.sortProposals('created_at', this.props.proposals)
   }

   sortProposals = (field, proposals) => {
      // console.log('|||| BEFORE sort', proposals);
     let sortedProposals = this.state.proposals.sort( (a, b) => {
      //   console.log("||||SORTING sortProposals", a[field], b[field]);
       if (a[field] < b[field]) {
         return 1;
       }
       if (a[field] > b[field]) {
         return -1;
       }
       return 0;
     });
     // Then call setState
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
               <ProposalListItem key={i} data={i + 1} proposal={proposal} />
            )
         })
         el = ProposalItems
      }

      return (
         <div>
            <div className="row sortFilter">
               <div className="container">
                  <Filter proposals={this.props.proposals} filterProposals={this.filterProposals.bind(this)}  />
                  <Sort id="sort" proposals={this.props.proposals} sortProposals={this.sortProposals}  />
               </div>
            </div>
            <div className="">
               {el}
            </div>
         </div>
      )
   }
}

export default ProposalList
