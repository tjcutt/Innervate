import React from 'react';

class WizardTwo extends React.Component {
  state = {
    imageUrl: '',
    images:[],
    videoUrl: '',
    videos:[],
    articleUrl: '',
    articles:[],
    info: ''
  };

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.handleInfoChange = this.handleInfoChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.addImage = this.addImage.bind(this)
    this.createImages = this.createImages.bind(this)
    this.handleVideoChange = this.handleVideoChange.bind(this)
    this.addVideo = this.addVideo.bind(this)
    this.createVideos = this.createVideos.bind(this)
    this.handleArticleChange = this.handleArticleChange.bind(this)
    this.addArticle = this.addArticle.bind(this)
    this.createArticles = this.createArticles.bind(this)
  }
  handleClick(event){
    fetch('/api/wizard2',{
      method:"POST",
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
      body:JSON.stringify(this.state)
    }).then(res => console.log(res))
  }
  handleInfoChange(event){
    this.setState({info: event.target.value});
  }
  handleImageChange(event){
    this.setState({imageUrl: event.target.value});
  }
  addImage(event){
    let imageUrl = this.state.imageUrl;
    if(this.state.images.indexOf(imageUrl) == -1){
      this.setState({
        images: this.state.images.concat([imageUrl]),
        imageUrl: ''
      })
    }
  }
  createImages(images){
    return images.map(function(source){
      return <img key={source} width="200px" src={source}/>;
    })
  }
  handleVideoChange(event){
    this.setState({videoUrl: event.target.value});
  }
  addVideo(event){
    let videoUrl = this.state.videoUrl;
    if(this.state.videos.indexOf(videoUrl) == -1){
      this.setState({
        videos: this.state.videos.concat([videoUrl]),
        videoUrl: ''
      })
    }
  }
  createVideos(videos){
    return videos.map(function(source){
      return <li key={source} className="collection-item">{source}</li>
    })
  }
  handleArticleChange(event){
    this.setState({articleUrl: event.target.value});
  }
  addArticle(event){
    let articleUrl = this.state.articleUrl;
    if(this.state.articles.indexOf(articleUrl) == -1){
      this.setState({
        articles: this.state.articles.concat([articleUrl]),
        articleUrl: ''
      })
    }
  }
  createArticles(articles){
    return articles.map(function(source){
      return <li key={source} className="collection-item">{source}</li>
    })
  }
  render(){
    const {info, articleUrl, articles, videoUrl, videos, imageUrl, images} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div id="bar">
            <div id="progress2">Part 2</div>
          </div>
        </div>
        <div className="row">
        <h5>Add images</h5>
          <div className="col l11">
            <input value={this.state.imageUrl} onChange={this.handleImageChange} placeholder="Enter image URL" type="text" className="validate"/>
          </div>
          <div className="col l1">
            <a className="btn-floating btn-medium waves-effect waves-light cyan lighten-2" onClick={this.addImage}><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row">
          <div className="col l12">
            {this.createImages(this.state.images)}
          </div>
        </div>
        <div className="row">
        <h5>Add videos</h5>
          <div className="col l11">
            <input value={this.state.videoUrl} onChange={this.handleVideoChange} placeholder="Enter video URL" type="text" className="validate"/>
          </div>
          <div className="col l1">
            <a className="btn-floating btn-medium waves-effect waves-light cyan lighten-2" onClick={this.addVideo}><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row">
          <ul className="collection">
            {this.createVideos(this.state.videos)}
          </ul>
        </div>
        <div className="row">
        <h5>Add articles</h5>
          <div className="col l11">
            <input value={this.state.articleUrl} onChange={this.handleArticleChange} placeholder="Enter article URL" type="text" className="validate"/>
          </div>
          <div className="col l1">
            <a className="btn-floating btn-medium waves-effect waves-light cyan lighten-2" onClick={this.addArticle}><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row">
          <ul className="collection">
            {this.createArticles(this.state.articles)}
          </ul>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <h5>Any additional info...</h5>
            <textarea value={this.state.info} onChange={this.handleInfoChange} id="textarea1" className="materialize-textarea"></textarea>
          </div>
          <div className="col l12">
            <button className="btn waves-effect waves-light right" type="submit" onClick={this.handleClick} name="action">Next
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default WizardTwo
