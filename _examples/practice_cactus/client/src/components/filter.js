import React from 'react'

export default class Filter extends React.Component {
  render() {
    console.log("WE ARE IN CLASSIFIEDS");

    return (
      <div>
        <input
          type='text'
          onChange={this.handleChange.bind(this)}
        ></input>
      </div>
    );
  }

  handleChange(event){
    // console.log(event.target);
    // console.log(this.props.ads);
    let ads = this.props.ads
    this.props.filterAdsBy(event.target.value, ads)
  }
}
