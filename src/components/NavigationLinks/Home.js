import React, {Component} from 'react'
import HomePageGreeting from '../HomePage/HomePageGreeting';
import HomePageBlocks from '../HomePage/HomePageBlocks';
import SpaceDivider from '../HomePage/SpaceDivider'
import Footer from '../Footer'
import {StyledLogo} from '../HomePage/StyledLogo'

export default class Home extends Component {
    render(){
        return (
            <div className="HomePage">
           
            <header class="main-header"> 
            <HomePageGreeting/>
            <StyledLogo/>
          </header>
          
            <body>
            <HomePageBlocks/>
            <SpaceDivider/>
            <Footer/>
      
            </body>
      </div>

    )}
}
