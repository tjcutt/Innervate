import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import MultiSelect from "./MultiSelect"
import RaisedButton from 'material-ui/RaisedButton';

class Proposals extends React.Component {

   render(){
      return (

      <MuiThemeProvider>
         <div className="container">
            <h1 id="timbo"> Proposals!!</h1>
            <MultiSelect />
            <RaisedButton label="New +" primary={true} />
         </div>
      </MuiThemeProvider>

      )
   }

}

export default Proposals
