import React from 'react'
import Sort from './sort'
import Filter from './filter'
import Classifieds from './classifieds'
import { Link } from 'react-router-dom'

export default class SortableAds extends React.Component {
  state = {
   'ads': this.props.ads // default state
  }

  sortAdsStateBy = (field, ads) => {
    // Sorting ...
    var sortedAds = ads.sort( (a, b) => {
      console.log("IN sortAdsStateBy", field);
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    });

    // Then call setState
    this.setState({ 'ads': sortedAds });
  }

  filterAdsBy(term, ads){
    let filteredAds = []
    for (let ad of ads) {
      if (ad.title.includes(term) || ad.description.includes(term)) {
        console.log(ad.title, 'HIIIIIIIIIIII', ad.description);
        filteredAds.push(ad)
      }
    }

    this.setState({ 'ads': filteredAds })
  }

  render() {
    // Return page with stats data and Roster
    console.log("WE ARE IN SORT");

    return (
      <div>
        <Filter ads={this.props.ads} filterAdsBy={this.filterAdsBy.bind(this)}/>
        <Sort ads={this.props.ads} sortAdsStateBy={this.sortAdsStateBy}/>
        <Classifieds ads={this.state.ads} />
        <Link to="/new">Submit Ad</Link>
      </div>
    );
  }
};
