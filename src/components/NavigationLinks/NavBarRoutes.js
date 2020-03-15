import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Contact'
import Blogs from './Blogs'
import NavBar from './NavBar'
import Home from './Home'
import DownloadResume from './DownloadResume'


export default function NavBarRoutes(){
  return (
    <Router>
      <NavBar/>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/blogs' component={Blogs}/>
        <Route exact path='/download_resume' component={DownloadResume}/>
      </Switch>
      </div>
    </Router>
  );
}