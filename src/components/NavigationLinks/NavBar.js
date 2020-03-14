import React from 'react'
import {Link} from 'react-router-dom'
import HomeScrollLink from '../HomePage/HomeScrollLink'


export default function NavBar() {
    return (
        <div className="navbar">
        
            <Link className="NavBar-links"to='/'>Home</Link>
            <HomeScrollLink/>
            <Link className="NavBar-links"to='/download_resume'>Download Resume</Link>
           <Link className="NavBar-links"to='/blogs'>Blogs</Link>
           <Link className="NavBar-links" to='/contact'>Contact</Link>
        </div>
    )
}
