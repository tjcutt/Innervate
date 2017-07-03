import React from "react"

class Nav extends React.Component{
  render(){
    return (
      <nav>
         <div className="nav-wrapper">
           <a href="#!" className="brand-logo left">Innervate</a>
           <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons hamburger">menu</i></a>
           <ul className="right hide-on-small-and-down">
              <li><a href="/myproposals">My Proposals</a></li>
              <li><a href="/proposals">Proposals</a></li>
              <li><a href="/charts">Charts</a></li>
              <li><a href="/">Log Out</a></li>
           </ul>
           <div className="side-nav" id="mobile-demo">
              <ul>
                 <p id="sideNavTitle"> Navigation </p>
                 <li><a href="/myproposals">My Proposals</a></li><br />
                 <li><a href="/proposals">Proposals</a></li><br />
                 <li><a href="/charts">Charts</a></li><br />
                 <li><a href="/">Log Out</a></li><br />
               </ul>
            </div>
         </div>
       </nav>
    )
  }

}

export default Nav
