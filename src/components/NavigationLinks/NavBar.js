import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
           <Link to='/'>Home</Link>
           <Link to='/about'>About Me</Link>
           <Link to='/blogs'>Blogs</Link>
           <Link to='/contact'>Contact</Link>
        </div>
    )
}
