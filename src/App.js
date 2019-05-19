import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import API from './api';
import Header from './Header';
import Home from './Home';
import SampleB from './SampleB';
import SampleC from './SampleC';
import Family from './FamilyPhoto.jpg';
import Lola from './Lola1.jpg'
import Footer from './Footer';
import './bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
 
      <Router>
      <div className="container-fluid">
        
          <Header />
          <br/>
          <Home />
        <div className="col-sm-4 offset-sm-3">
          <API />
        </div>
          <SampleB />
          <header className="col-sm-4 offset-sm-4">
            <img src={Lola} className="mx-auto" alt="Logo" />
          </header>

        <div>
          <SampleC />
        </div>

        <header className="col-sm-4 offset-sm-4">
            <img src={Family} className="mx-auto" alt="Logo" />
          </header>
          <br />

        <div className="footer"><Footer /></div>
      </div>
      </Router>
    );
  }
}

export default App;





