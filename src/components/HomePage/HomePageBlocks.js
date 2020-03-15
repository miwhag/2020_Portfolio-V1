import React from 'react'


export default function HomePageBlocks(){
    return (

        <div className="about-me-section">
            <div className="HomePageBlocks-about-me">
                <h1>Nice to Meet You</h1>
                <p className="HomePageBlocks-about-me-paragraph"> Born and raised in Colorado, I love everything this state has to offer. I previously worked in the pastry industry, and then in insurance 
                but throughout all of my experience always let my creativity lead me forward. I'm a Flatiron Coding School graduate as of April 2020, and excited to be a part of the Denver Tech Community. <br></br></p>
            </div>
    
        <div className="box-body-container">
            <section className="box-1">
                <img class="HomePageBlock-icon" src="https://i.ibb.co/hK1jVjG/coding.png" alt="frontend"/>
                <h3 className="HomePageBlock-header-text">Frontend</h3>
                <p className="HomePageBlock-header-sub-text"> I value clean websites, interesting interactivity, and captivating features. </p>
                <ul className="HomeBlock-box-text-content">
                    <li>React </li>
                    <li>HTML/CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                </ul>
            </section>

            <section className="box-2">
            <img class="HomePageBlock-icon" src="https://i.ibb.co/cw4zn49/data-collection.png" alt="backend"/>
            <h3 className="HomePageBlock-header-text">Backend</h3>
                <p className="HomePageBlock-header-sub-text"> Organization of data models and connecting relationships is just one thing that I love about the backend </p>
                <ul className="HomeBlock-box-text-content">
                    <li>Ruby </li>
                    <li>Ruby on Rails</li>
                    <li>SQLite3</li>
                    <li>ActiveRecord</li>
                </ul>
            </section>

            <section className="box-3">
            <img class="HomePageBlock-icon" src="https://i.ibb.co/7YPk7Ct/pencil.png" alt="design"/>
            <h3 className="HomePageBlock-header-text">Design</h3>
                <p className="HomePageBlock-header-sub-text"> Design is powerful and I am excited by the process of bringing things alive with the use of it.</p>
                <ul className="HomeBlock-box-text-content">
                    <li>Canva</li>
                    <li>Miro</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                </ul>
            </section>
            </div>
        </div>
    ) 
}

