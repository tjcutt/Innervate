import React from 'react'

import {Input} from 'react-materialize'


class Sort extends React.Component {
   constructor(props) {
     super(props)
   //   this.sortProposals = this.sortProposals.bind(this)
   }

  render() {
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
    let proposals = this.props.proposals
    let field = event.target.value
    this.props.sortProposals(field, proposals)
  }

}
export default Sort
