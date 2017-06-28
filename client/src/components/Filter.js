import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <div className="input-field col s4 m4 l6">
         <input id="filter" onChange={this.handleChange.bind(this)} type="text" className="validate" />
         <label htmlFor="filter">Filter</label>
      </div>
    );
  }

  handleChange(event){
    // console.log(this.props.ads);
    let proposals = this.props.proposals
    this.props.filterProposals(event.target.value, proposals)
  }
}

export default Filter
