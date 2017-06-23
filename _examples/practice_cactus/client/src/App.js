import React, { Component } from 'react';
import './App.css';
// import Ads from './components/ad-list'
import SortableAds from './components/sortable-ads'

class App extends Component {
  state = {ads: []}

  componentDidMount() {
    fetch('/classifieds')
      .then(res => res.json())
      .then(ads => this.setState({ ads }));
  }

  render() {
    return (
      <div className="App">
        <SortableAds
          ads={this.state.ads}
        />
      </div>
    );
  }
}

export default App;
