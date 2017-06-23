import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col} from 'react-grid-system'
import MultiSelect from "./MultiSelect"
import RaisedButton from 'material-ui/RaisedButton';

class Proposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }

   render(){
      return (

      <MuiThemeProvider>
         <div className="container">
            <div className="row">
               <h1 id="timbo"> Proposals!!
               <button className="btn newBtn">I am gr8</button></h1>
            </div>
            <div className="row">
               <MultiSelect  className="col s4 m4" />
               <div className="input-field col s5 m5 l6">
                <input id="filter" type="text" className="validate" />
                <label htmlFor="filter">Filter</label>
               </div>
            </div>
         </div>
      </MuiThemeProvider>

      )
   }

}

export default Proposals
