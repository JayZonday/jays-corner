import React from 'react';

class Navbar extends React.Component{
  render(){

    return (
    <div className="navBar">
      <button className= "navButton" id='projects'>Projects</button>
      <button className= "navButton" id='ffAdvice' >FF2018 Advice</button>
      <button className= "navButton" id='contact' >Contact</button>
    </div>
    )
  }
}

export default Navbar
