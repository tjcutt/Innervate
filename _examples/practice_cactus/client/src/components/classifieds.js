import React from 'react'
import AdCard from './ad-card'
export default class Classifieds extends React.Component {
  render() {
    console.log("WE ARE IN CLASSIFIEDS");

    // Create player cards from sorted, dynamic JSON collection
    var cards = [];
    this.props.ads.forEach(function(ad) {
        cards.push(<AdCard ad={ad} key={ad.id} />);
    });

    return (<div>{cards}</div>);
  }
}
