import React from 'react'
import {Link} from 'react-router-dom'
import Signature from './Images/Signature.png'
import HomeScrollLink from './HomePage/HomeScrollLink'


export default function Footer() {
    return (
        <div>
            <footer> 

                <main className="Footer-main-content">
                    <div className="Footer-get-connected-container">
                        <h1>GET CONNECTED</h1>
                        <p className="get-connected-text">miwha.geschwind@gmail.com</p>
                        <p className="get-connected-text">720-240-3984</p>

                        <section className="Footer-content">
                            <a href ="mailto:miwhag@gmail.com"><img src={"https://i.ibb.co/HCqybSP/mail-2.png"} className="Footer-links" alt="signature"/></a>  
                            <a href ="https://github.com/miwhag" target="_blank"><img src={"https://i.ibb.co/NyYsL14/github-2.png"} alt="signature" className="Footer-links"/></a>  
                            <a href ="https://www.linkedin.com/in/miwha-geschwind/" target="_blank"><img src={"https://i.ibb.co/fqvzWXm/linkedin-4.png"} className="Footer-links" alt="signature"/></a>  
                            <a href ="https://medium.com/@miwhag" target="_blank"><img src={"https://i.ibb.co/SN6dkxZ/medium.png"} className="Footer-links"alt="phone"/></a>  
                        </section>
                        
                    </div>

                    <section className="Footer-signature-links-container">
                        <img className="signature" src={Signature} alt="signature"/>
                    </section>

                    <div className="Footer-get-connected-container">
                        <h1 className="Footer-navigation-text">NAVIGATE</h1>
                        <section className="Footer-navigation-content">

                            <Link className="Footer-navigation"to='/download_resume'> Resume</Link> \ 
                            <Link className="Footer-navigation" to='/contact'>Contact</Link> \ 
                            <HomeScrollLink />
                        </section>
                    </div>
                </main>

            </footer>
        </div>
    )
}
