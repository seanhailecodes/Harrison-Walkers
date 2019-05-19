import React, { Component } from 'react';
import api from './api';
import Logo from './color_logo_transparent.png';
import Family from './FamilyPhoto.jpg';
import Lola from './Lola1.jpg'
import Header from './Header.js';
import './bootstrap.min.css';
import './App.css';
import Sample from './Sample';
import SampleB from './SampleB';
import SampleC from './SampleC';
import Footer from './Footer';


class App extends Component {
  render() {
    return (

      <div className="container-fluid">
        
        <div className="row">
          <header className="col-sm-4 offset-sm-4">
            <img src={Logo} className="mx-auto" alt="Logo" />
          </header>
        </div>

        <div>
          <Header />
        </div>
          <br/>
        <div>
          <Sample />
        </div>

        <div className="col-sm-4 offset-sm-3">
          <api />
        </div>
        
        <div>
          <SampleB />
          <header className="col-sm-4 offset-sm-4">
            <img src={Lola} className="mx-auto" alt="Logo" />
          </header>
        </div>

        <div>
          <SampleC />
        </div>

        <div>
        <header className="col-sm-4 offset-sm-4">
            <img src={Family} className="mx-auto" alt="Logo" />
          </header>
        </div>
          <br />

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;





