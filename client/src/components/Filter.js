import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <div className="input-field col s4 m4 l6">
         <input id="filter" onChange={this.handleChange.bind(this)} type="text" className="validate" />
         <label id="filter" htmlFor="filter">Filter</label>
      </div>
    );
  }

  handleChange(event){
    let proposals = this.props.proposals
    this.props.filterProposals(event.target.value, proposals)
  }
}

export default Filter
