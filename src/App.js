import React from 'react';
import {Component} from 'react'
import './App.css';
import NavBarRoutes from '../src/components/NavigationLinks/NavBarRoutes'
// import Homepic from './components/homepage_image';
import Greeting from './components/greeting';
import Aboutme from './components/aboutme';
import NavBar from './components/NavigationLinks/NavBar'
import {StyledLogo} from './components/StyledLogo'



class App extends Component {

  render() {
    return(
    
    <div className="App">
        <NavBarRoutes/>
        <header class="main-header"> 
        <Greeting/>
        <StyledLogo/>
      </header>
      
        <body>
        <Aboutme/>
    
        </body>
  </div>
  
    )
    
  }
}

export default App;