import React from 'react'

import {Input} from 'react-materialize'


class Sort extends React.Component {
   constructor(props) {
     super(props)
   //   this.sortProposals = this.sortProposals.bind(this)
   }

  // sortProposals(field){
  //   var proposals = this.props.proposals;
  //   this.props.sortProposals(field, proposals);
  // }
  render() {
         console.log("WE ARE IN SORT!!");
    // this.sortAds('created_at')
    return (
      <div className="sort-section">
         <Input s={4} type='select' label="Sort" defaultValue='' onChange={this.handleChange.bind(this)}>
            <option value='votes'>Popular</option>
            <option value='created_at'>New</option>
            <option value='something'>Something</option>
         </Input>
      </div>
    )
  }
  handleChange(event){
    console.log('01010 handle in sort field', event.target.value);
    let proposals = this.props.proposals
    let field = event.target.value
    this.props.sortProposals(field, proposals)
  }

}
export default Sort

// onClick={this.sortProposals('votes')}
// onClick={this.sortProposals('created_at')}
// onClick={this.sortProposals('something')}



// <h1>Sort by</h1>
// {/* {this.sortAds.bind(this,'price')} */}
// <div className="pill" onClick={this.sortAds.bind(this,'created_at')} >Date</div>
// <div className="pill" onClick={this.sortAds.bind(this,'price')} >Price</div>
// <div className="pill" onClick={this.sortAds.bind(this,'title')} >Title</div>
