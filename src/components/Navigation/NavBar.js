import React from 'react'
import {Link} from 'react-router-dom'
import HomeScrollLink from '../HomePage/HomeScrollLink'


export default function NavBar() {
    return (
        <div className="navbar">
        
            <Link className="NavBar-links"to='/'>Home</Link>
            <Link className="NavBar-links"to='/download_resume'>Resume</Link>
           <Link className="NavBar-links" to='/contact'>Contact</Link>
        </div>
    )
}
