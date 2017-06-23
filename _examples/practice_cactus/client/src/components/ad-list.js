import React from 'react'

import Ad from './ad'

import { Link } from 'react-router-dom'


export default class Ads extends React.Component {

  render() {

    return (
      <div>
        <h1>Ads</h1>

        {this.props.ads.map(ad =>
          <Ad
            key={ad.id}
            ad={ad}
          />
        )}
        <Link to="/new">Submit Ad</Link>

      </div>


  )
  }

 }
