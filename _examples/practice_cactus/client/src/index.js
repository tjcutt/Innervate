import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import New from './components/new-ad';
import AdPage from './components/ad-page';
// import Artist from './components/artist';
import './index.css';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route path="/ads" component={App}></Route>
      <Route path="/new" component={New}></Route>
      <Route path="/ad/:id" component={AdPage}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
