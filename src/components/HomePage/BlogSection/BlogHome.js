import React from 'react'
import mediumImage from '../../Images/medium_article.png'
import Typewriter from './Typewriter'

export default function BlogHome() {
    return (
        <div className="BlogHome-container">
                <section className="BlogHome-image-container">
                <img className="BlogHome-medium-image" src={mediumImage} alt="Medium"/>
                </section>

                <section className="BlogHome-typewriter-container">
                    <Typewriter/>
                </section>
        </div>
    )
}
