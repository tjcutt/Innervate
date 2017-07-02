import React from "react";
class Nav extends React.Component{
  render(){
    return (
      <nav>
      <div class="nav-wrapper">
      <a href="/" className="brand-logo left">Innervate</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="/myproposals">My Proposals</a></li>
      <li><a href="/proposals">Proposals</a></li>
      <li><a href="/">Log Out</a></li>
      </ul>
      </div>
      </nav>
    )
  }

}

export default Nav
