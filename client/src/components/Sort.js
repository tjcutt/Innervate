import React from 'react'

import {Input} from 'react-materialize'


class Sort extends React.Component {
   constructor(props) {
     super(props)
   //   this.sortProposals = this.sortProposals.bind(this)
   }

  render() {
         console.log("WE ARE IN SORT!!");
    // this.sortAds('created_at')
    return (
      <div className="sort-section sort">
         <Input s={3} id="sort" type='select' label="Sort" defaultValue='' onChange={this.handleChange.bind(this)}>
            <option value='created_at'>New</option>
            <option value='votes'>Popular</option>
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
