import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactPage from '../ContactPage/ContactPage'
import Blogs from '../HomePage/BlogSection/Blogs'
import NavBar from './NavBar'
import Home from '../HomePage/Home'
import DownloadResume from '../ResumePage/DownloadResume'


export default function NavBarRoutes(){
  return (
    <Router>
      <NavBar/>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/blogs' component={Blogs}/>
        <Route exact path='/download_resume' component={DownloadResume}/>
      </Switch>
      </div>
    </Router>
  );
}