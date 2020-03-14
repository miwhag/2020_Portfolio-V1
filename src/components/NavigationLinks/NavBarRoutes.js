import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Blogs from './Blogs'
import App from '../../App'


export default function NavBarRoutes(){
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/about' component={AboutMe}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/blogs' component={Blogs}/>
      </Switch>
      </div>
    </Router>
  );
}