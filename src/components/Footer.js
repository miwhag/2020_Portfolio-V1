import React from 'react'
import {Link} from 'react-router-dom'
import Signature from '../Signature.png'

export default function Footer() {
    return (
        <div>
            <footer> 

                <main className="Footer-main-content">
                    <div className="Footer-get-connected-container">
                        <h1>GET CONNECTED</h1>
                        <p className="get-connected-text">Miwhag@gmail.com</p>
                        <p className="get-connected-text">720-240-3984</p>
                        <section className="Footer-content">
                            <a href ="mailto:miwhag@gmail.com"><img className="Footer-links" src="https://i.ibb.co/HCqybSP/mail-2.png" alt="signature"/></a>  
                            <a href ="https://github.com/miwhag"><img className="Footer-links" src="https://i.ibb.co/NyYsL14/github-2.png" alt="signature"/></a>  
                            <a href ="https://www.linkedin.com/in/miwha-geschwind/"><img className="Footer-links" src="https://i.ibb.co/fqvzWXm/linkedin-4.png" alt="signature"/></a>  
                            <a href =""><img className="Footer-links" src="https://i.ibb.co/Y7mn8CH/phone-call.png" alt="phone"/></a>  
                            <a href ="https://medium.com/@miwhag"><img className="Footer-links" src="https://i.ibb.co/SN6dkxZ/medium.png" alt="phone"/></a>  
                        </section>
                    </div>

                    <section className="Footer-signature-links-container">
                        <img className="signature" src={Signature} alt="signature"/>
                    </section>

                    <div className="Footer-get-connected-container">
                        <h1 className="Footer-navigation-text">NAVIGATE</h1>
                        <section className="Footer-navigation-content">

                            <Link className="Footer-navigation"to='/download_resume'>Download Resume</Link> \ 
                            <Link className="Footer-navigation"to='/blogs'>Blogs</Link> \ 
                            <Link className="Footer-navigation" to='/contact'>Contact</Link> 
                        </section>
                    </div>
                </main>

            </footer>
        </div>
    )
}
