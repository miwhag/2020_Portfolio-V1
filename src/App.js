import React from 'react';
import {Component} from 'react'
import './App.css';
import Navigation from '../src/components/navbar'
import Homepic from './components/homepage_image';
import Greeting from './components/greeting';
import Aboutme from './components/aboutme';

class App extends Component {


  render() {
    return(
    <div className="App">
       <Navigation/>
      <header class="main-header"> 
       <Greeting/>
       <Homepic/> 
    </header>
    
      <body>
       <Aboutme/>
        <Aboutme/>
        <Aboutme/>

      </body>
      



  </div>
    )
    
  }
}

export default App;