import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Proposals from './components/Proposals.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/proposals" component={Proposals}></Route>
    </div>

  </BrowserRouter>,

  document.getElementById('root')

);
registerServiceWorker();
