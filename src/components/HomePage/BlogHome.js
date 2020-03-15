import React from 'react'
import mediumImage from '../../medium_article.png'
import Typewriter from './Typewriter'

export default function BlogHome() {
    return (
        <div className="BlogHome-container">
                <section className="BlogHome-image-container">
                <img className="BlogHome-medium-image" src={mediumImage} alt="Medium"/>
                </section>
          


                <section className="BlogHome-typewriter-container">
                {/* <div className="BlogHome-medium-red-logo-container"> */}
                    {/* <img className="BlogHome-medium-red-logo" src="https://i.ibb.co/CnhQ4h5/medium-red.png" alt="mediumlogo"/>
                    <h1 className="BlogHome-blog-title">BLOGS</h1> */}
                {/* </div> */}
                    <Typewriter/>
                </section>
           
        </div>
    )
}
