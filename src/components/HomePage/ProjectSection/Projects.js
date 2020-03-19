import React from 'react'
import CoffeeGIF from '../../Images/coffeeGIF.gif'
import FrisbeeGIF from '../../Images/ultimate.gif'
import './Projects.css'

export default function Projects() {
    return (
        <div className="Project-section-container">
           <h1 className="Project-section-title">Projects</h1>
           <main className="Project-project-container">
                <div className="project">
            
                <a href="https://github.com/miwhag/ultimate-frontend/blob/master/README.md" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Mod 2: Coffee Inventory App</h1>
                    <p className="project-about"> A inventory app for a coffee shop to keep track of the grounds they have on hand.</p>
                    <img className="coffee-gif" src={CoffeeGIF} alt="coffee-gif"/>  
                    </div>

                    <div className="project">
                    <a href="https://github.com/miwhag/ultimate-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Mod 3: Ultimate Frisbee App</h1>
                    <p className="project-about"> A schedule app and roster page for a ultimate frisbee team.</p>
                    <img className="frisbee-gif" src={FrisbeeGIF} alt="frisbee-gif"/> 

                    </div>

                    <div className="project">
                    <a href="https://github.com/miwhag/2020_Portfolio-" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Portfolio</h1>
                    <p className="project-about"> React Porftolio you are on currently.</p>
                    <img className="portfolio-gif" src="https://i.ibb.co/CJ6CNPr/TBD.jpg" alt="portfolio-gif"/> 
                

                    </div>   

                    <div className="project">
                    <a href="https://github.com/miwhag/ultimate-frontend/blob/master/README.md" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Mod 4: TBD</h1>
                    <p className="project-about"> Wheels are turning but no project to present quite yet.</p>
                    <img className="mod-4" src="https://i.ibb.co/CJ6CNPr/TBD.jpg" alt="mod4-gif"/> 
             

                    </div>

                    <div className="project">
                    <a href="https://github.com/miwhag/ultimate-frontend/blob/master/README.md" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Flatiron Capstone Project</h1>
                    <p className="project-about"> Wheels are turning but no project to present quite yet.</p>
                    <img className="capstone" src="https://i.ibb.co/CJ6CNPr/TBD.jpg" alt="capstone"/> 

                    </div>
           </main>
        </div>
    )
}

