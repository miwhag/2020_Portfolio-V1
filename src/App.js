import React from 'react';
import {Component} from 'react'
import './App.css';
import NavBarRoutes from '../src/components/NavigationLinks/NavBarRoutes'


class App extends Component {

  componentDidMount(){
    fetch('https://miwha-geschwind-portfolio.herokuapp.com/')
  }
  
  render() {
    return(
      <NavBarRoutes/>
    )
  }
}

export default App;