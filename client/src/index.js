import React from 'react';
import ReactDOM from 'react-dom';
// import Cookies from 'react-cookie'
import App from './App';
import Proposals from './components/Proposals.js'
import Survey from './components/Survey.js'
import HomeForm from './components/HomeForm.js'
import WizardOne from './components/Wizard1.js'
import WizardTwo from './components/Wizard2.js'
import WizardThree from './components/Wizard3.js'
import MyProposals from './components/MyProposals'
// import HomeNav from './components/HomeNav.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/proposals" component={Proposals}></Route>
      <Route path="/myproposals" component={MyProposals}></Route>
      <Route path="/survey" component={Survey}></Route>
      <Route path="/homeForm" component={HomeForm}></Route>
      <Route path="/wizard1" component={WizardOne}></Route>
      <Route path="/wizard2" component={WizardTwo}></Route>
      <Route path="/wizard3" component={WizardThree}></Route>
    </div>

  </BrowserRouter>,

  document.getElementById('root')

);
registerServiceWorker();
