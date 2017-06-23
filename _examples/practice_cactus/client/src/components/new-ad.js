import React from 'react'


import { Redirect } from 'react-router-dom'


export default class New extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasSubmitted:false
    }
  }
  renderRedirect(){
    if (this.state.hasSubmitted) {
      return (
        <Redirect
          to='/ads'
        ></Redirect>
      )
    }

  }
  render() {

    return (
      <div>
        {this.renderRedirect()}
        <form
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label>Title</label>
          <input
            type="text"
            ref="title"
            defaultValue="Bonnaroo"
          />
          <br />
          <label>Price</label>
          <input
            type="text"
            ref="price"
            defaultValue="425"
          />
          <br />

          <label>Description</label>
          <input
            type="textarea"
            ref="description"
            defaultValue="A music festival in which lots of people go and have fun."
          />

          <br />

          <label>Image</label>
          <input
            type="text"
            ref="item_image"
            defaultValue="http://www.nashvillemusicguide.com/wp-content/uploads/bonnaroo.jpg"
          />

          <br />
          <button>Submit Ad</button>
        </form>
      </div>


  )
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("in Submit Handler");
    console.log(this.refs);
    let newAd = {
      title: this.refs.title.value,
      price: this.refs.price.value,
      description: this.refs.description.value,
      item_image: this.refs.item_image.value
    }

    fetch(`/classifieds`, {
      method: "POST",
      body: JSON.stringify(newAd),
      credentials: 'same-origin',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(ad => {
        this.setState({ hasSubmitted:true })
        console.log(ad);
      })

  }
 }
