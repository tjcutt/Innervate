import React from 'react';
import { Link } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class HomeNav extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
       <MuiThemeProvider>
          <AppBar showMenuIconButton="false" title="Title"/>
      </MuiThemeProvider>
    );
  }
}

export default HomeNav
