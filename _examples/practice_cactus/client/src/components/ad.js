import React from 'react'
import { Link } from 'react-router-dom'


export default class Ad extends React.Component {

  render() {

    return (

          <div
            data-ad-id={this.props.ad.id}
          >
            <Link to={'/ad/' + this.props.ad.id}><h1>{this.props.ad.title}</h1></Link>
            <h2>Cost: ${this.props.ad.price}</h2>
            <h4>{this.props.ad.description}</h4>
            <img
              src={this.props.ad.item_image}
              alt={this.props.ad.title}
            ></img>

          </div>



  )
  }

 }
