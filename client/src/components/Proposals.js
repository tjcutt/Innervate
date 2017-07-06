import React from 'react'
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import ProposalList from './ProposalList'
import Nav from './Nav';

class Proposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[],
       hasCookies:true
     }
   }

   componentWillMount() {
     const cookies = new Cookies()
     if(!cookies.get('user')){
       this.setState({
         hasCookies:false
       })
     }else{
       fetch(`/api/proposals`, {
         credentials:'include'
       })
       .then(res => res.json())
       .then(proposals => {
         this.setState({
           proposals:proposals
         })
       })
     }
   }
      handleRedirect(){
        if(!this.state.hasCookies){
          return <Redirect to='/'></Redirect>;
        }
      }
   render(){
      if (this.state.proposals.length == 0){
         return (

           <div>
            <Nav />
            <div className="container propMain">
              {this.handleRedirect()}
               <div className="row">
                  <div className="componentTitle"> Proposals</div>
               </div>
            </div>
            </div>
         )
      }

      return (
      <div>
      <Nav />
         <div className="container propMain">
            <div className="row">
               <div className="componentTitle"> Proposals</div>
            </div>
            <ProposalList proposals={this.state.proposals} />
         </div>
      </div>
      )
   }

}

export default Proposals
