import React, { Component } from 'react'
import Typical from 'react-typical'
import './Typewriter.css'

export default class Typewriter extends Component {
    render(){
        return(
                <div className="typewriter">
                    <h1 className="Typewriter-Header">Where I talk about </h1>
                    <a href ="https://medium.com/@miwhag" target="_blank" className="Typewriter-medium-link"><img className="Typewriter-green-icon" src="https://i.ibb.co/4KyFtHL/VIEW-BLOGS-2.png" alt="green-arrow"/></a>
                <Typical 
                    steps={[
                        'Coding',
                        1000,
                        'Bootcamp Life',
                        1000, 
                        'Design',
                        1000, 
                        'The Tech Industry',
                        1000, 
                        'My Journey',
                        1000, 
                        'Frontend Frameworks',
                        1000, 
                        'Data Modeling',
                        1000]}
                    loop={Infinity}
                    wrapper="Typewriter-response-wrapper"
                />
               
                </div>
        )
    }
  }

 
  