import React from 'react'
import { Redirect } from 'react-router-dom'


export default class Ad extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      adId: this.props.match.params.id,
      ad: {},
      isEditing: false,
      isDeleted: false,
      shouldRedirect: false
    }
}

  componentDidMount() {
    console.log("WE ARE IN DIDMOUNT");
    fetch(`/classifieds/${this.state.adId}`)
      .then(res => res.json())
      .then(ad => this.setState({ ad }));
  }

  renderRedirect(){
    console.log('WE ARE IN RENDER Redirect');
    if (this.state.isDeleted || this.state.shouldRedirect) {
      return (
        <Redirect
          to='/ads'
        ></Redirect>
      )
    }
  }

  renderActionSection() {
    console.log('WE ARE IN RENDER ACTION');

    if (this.state.isEditing) {
      return (
        <div>
          <button onClick={this.handleSave.bind(this)}>Save</button>
          <button onClick={this.handleCancel.bind(this)}>Cancel</button>
        </div>

          )
          } else {
            return (
              <div>
                <button onClick={this.handleEdit.bind(this)}>Edit</button>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
              </div>

      )
    }

  }


  renderMainSection(){
    console.log('WE ARE IN RENDER MAIN');


    if (this.state.isEditing) {
      return (
        <form
          onSubmit={this.handleSubmit.bind(this)}
          data-ad-id={this.state.ad.id}
        >
          <label>Title</label>
          <input
            type="text"
            ref="title"
            defaultValue={this.state.ad.title}
          />
          <br />
          <label>Price</label>
          <input
            type="text"
            ref="price"
            defaultValue={this.state.ad.price}
          />
          <br />

          <label>Description</label>
          <input
            type="textarea"
            ref="description"
            defaultValue={this.state.ad.description}
          />
          <br />

          <label>Image</label>
          <input
            type="text"
            ref="item_image"
            defaultValue={this.state.ad.item_image}
          />
        </form>
      )
    } else {
      return (
        <div
          data-ad-id={this.state.ad.id}
        >
          <h1>{this.state.ad.title}</h1>
          <h2>Cost: ${this.state.ad.price}</h2>
          <h4>{this.state.ad.description}</h4>
          <img
            src={this.state.ad.item_image}
            alt={this.state.ad.title}
          ></img>
        </div>
      )
    }
  }

  render() {
console.log('WE ARE IN AD PAGE');
    return (
      <div>
        {this.renderRedirect()}
        {this.renderMainSection()}
        {this.renderActionSection()}
      </div>



  )
  }

  handleDelete(event){
    event.preventDefault()
    console.log('I made it to Delete Handler');

    fetch(`/classifieds/${this.state.adId}`, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(ad => {
        console.log('setting state in delete');
        this.setState({ isDeleted: true })
      })
  }

  handleEdit(event){
    event.preventDefault()
    this.setState({
      isEditing:true
    })
    console.log('I made it to Edit Handler');
  }

  handleCancel(event){
    event.preventDefault()
    this.setState({
      isEditing:false
    })
    console.log('I made it to Cancel Handler');
  }

  handleSave(event){
    event.preventDefault()
    console.log('I made it to Save Handler');
    console.log(this.refs);

    console.log('first',this.state.ad);

    let { title, price, description, item_image } = this.refs
    let ad = this.state.ad
    ad.title = title.value
    ad.item_image = item_image.value
    ad.price = price.value
    ad.description = description.value
    this.setState({ ad })
    console.log('second',this.state.ad);

    fetch(`/classifieds/${this.state.adId}`, {
      method: "PATCH",
      body: JSON.stringify(this.state.ad),
      credentials: 'same-origin',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(ad => {
        this.setState({ shouldRedirect:true })
      })
  }
  handleSubmit(event){
    event.preventDefault()
    console.log("I made it to Submit Handler");
  }
}
