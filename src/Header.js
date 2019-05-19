import React, { Component } from 'react'
import Logo from './color_logo_transparent.png';
import Nav from './Nav.js';

export default class Header extends Component {
  render() {
    return (
    <div>
            <Nav />
       

         <div className="row">
         
          <header className="col-sm-4 offset-sm-4">
            <img src={Logo} className="mx-auto" alt="Logo" />
          </header>
        </div>
    </div>
    )
  }
}
