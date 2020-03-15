import { Link, animateScroll as scroll } from "react-scroll";

import React from 'react'

export default function HomeScrollLink() {
    return (
        <Link 
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {800}
        className="NavBar-links" 
        to='box-1'>About Me</Link>
    )
}
