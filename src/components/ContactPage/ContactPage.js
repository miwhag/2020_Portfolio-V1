import React from 'react'
import '../ContactPage/Contact.css'
import Footer from '../Footer'
import ContactMe from './ContactMe'

export default function ContactPage() {
    return (
        <div>
            <main className="Contact-main-container">
            <ContactMe />
            </main>

            <Footer/>
        </div>
    )
}
