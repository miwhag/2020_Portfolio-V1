import React from 'react'


export default function HomePageBlocks(){
    return (

        <div className="about-me-section">
    
        <div className="box-body-container">
            <section className="box-1">
                <img class="HomePageBlock-icon" src="https://i.ibb.co/hK1jVjG/coding.png" alt="frontend"/>
                <h3 className="HomePageBlock-header-text">Frontend</h3>
            </section>

            <section className="box-2">
            <img class="HomePageBlock-icon" src="https://i.ibb.co/cw4zn49/data-collection.png" alt="backend"/>
                <h3 className="HomePageBlock-header-text">Backend</h3>
            </section>

            <section className="box-3">
            <img class="HomePageBlock-icon" src="https://i.ibb.co/7YPk7Ct/pencil.png" alt="design"/>
                <h3 className="HomePageBlock-header-text">Design</h3>
            </section>
            </div>
        </div>
    ) 
}

