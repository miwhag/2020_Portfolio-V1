import React from 'react'
import '../ContactPage/Contact.css'
import Footer from '../Footer'
import ContactMe from '../ContactPage/ContactMe'

export default function Contact() {
    return (
        <div>
            <main className="Contact-main-container">
            <ContactMe />
            </main>

            <Footer/>
        </div>
    )
}
