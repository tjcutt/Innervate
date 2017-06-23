// class ProfileCard extends React.Component {
//   render() {
//     return (
//       <section className="profile-card">
//         <figure>
//           <img src={this.props.player.picURL} alt={this.props.player.Name}></img>
//           <article>
//             <ul>
//               <li>{this.props.player.Name}</li>
//               <li>{this.props.player.position}, #{this.props.player.number}</li>
//               <li>{this.props.player.Club}</li>
//               <li>{this.props.player.Height} ({this.props.player.Meters} m)</li>
//               <li>{this.props.player.Age} years old</li>
//             </ul>
//           </article>
//         </figure>
//       </section>
//     );
//   }
// }

// class Roster extends React.Component {
//   render() {
//     // Create player cards from sorted, dynamic JSON collection
//     var cards = [];
//     this.props.players.forEach(function(player) {
//       if (player.year > 2000) {
//         cards.push(<ProfileCard player={player} />);
//       }
//     });
//
//     return (<div>{cards}</div>);
//   }
// }
import React from 'react'

export default class Sort extends React.Component {
  sortAds(field){
    var ads = this.props.ads;
    this.props.sortAdsStateBy(field, ads);
  }
  render() {
    // this.sortAds('created_at')
    return (
      <div className="sort-section">
        <h1>Sort by</h1>
        {/* {this.sortAds.bind(this,'price')} */}
        <div className="pill" onClick={this.sortAds.bind(this,'created_at')} >Date</div>
        <div className="pill" onClick={this.sortAds.bind(this,'price')} >Price</div>
        <div className="pill" onClick={this.sortAds.bind(this,'title')} >Title</div>
      </div>
    )
  }
}

// class SortablePlayerTable extends React.Component {
//   state = {
//    'players': this.props.players // default state
//   }
//
//   sortRosterStateBy = (field, players) => {
//     // Sorting ...
//     var sortedPlayers = players.sort( (a, b) => {
//       if (a[field] > b[field]) {
//         return 1;
//       }
//       if (a[field] < b[field]) {
//         return -1;
//       }
//       return 0;
//     });
//
//     // Then call setState
//     this.setState({'players': sortedPlayers});
//   }
//
//   render() {
//     // Prefix some interestings stats before roster
//     var ages = [], heights = [];
//     this.props.players.forEach(function(player) {
//       if (player.year > 2000) {
//         ages.push(player.Age);
//         heights.push(player.Meters);
//       }
//     });
//     var avgAge = (ages.reduce( (a, b) => a + b) / 12).toPrecision(3);
//     var avgHeight = (heights.reduce( (a, b) => a + b) / 12).toPrecision(3);
//
//     // Return page with stats data and Roster
//     return (
//       <div>
//         <h1>2012 Olympic Men's Basketball Team</h1>
//         <h2>Average Age: {avgAge} years old</h2>
//         <h2>Average Height: 6 ft 7 in ({avgHeight} m)</h2>
//         <Sort players={this.props.players} sortRosterStateBy={this.sortRosterStateBy}/>
//         <Roster players={this.state.players}/>
//       </div>
//     );
//   }
// };

// ReactDOM.render(
//   <SortablePlayerTable players={PLAYERS} />,
//   document.getElementById('container')
// );
