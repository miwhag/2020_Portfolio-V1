import React from 'react'
import './DownloadResume.css';
import PDF from '../PDF/Resume.pdf';
import Footer from '../Footer'


export default function DownloadResume() {

    return (
        <>
        <div className="resume">
            <div className="resume-download-container">
            <img className="resume-image" src="https://i.ibb.co/nbVcQWY/Miwha-Geschwind-Resume.png" alt="Miwha-Geschwind-Resume"/>
            <div className="button-container">
            <a href = {PDF} target = "_blank"><button class="download-resume-button">Download Pdf</button></a>      
            </div> 
            </div> 
        </div>

        <Footer/>
        </>
    )
}
