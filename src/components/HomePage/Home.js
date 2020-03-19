import React, {Component} from 'react'
import HomePageGreeting from './HomePageGreeting';
import HomePageBlocks from './HomePageBlocks';
import SpaceDivider from './SpaceDivider'
import Footer from '../Footer'
import BlogHome from '../HomePage/BlogSection/BlogHome'
import {StyledLogo} from './StyledLogo'
import Projects from './ProjectSection/Projects'
import CakeProjects from './CakeSection/CakeProjects'

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
            <Projects/>
            <BlogHome/>
            <CakeProjects/>
            <Footer/>
      
            </body>
      </div>

    )}
}
