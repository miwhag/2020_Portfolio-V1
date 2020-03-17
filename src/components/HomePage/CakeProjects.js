import React from 'react'
import './CakeProjects.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default function CakeProjects() {
    return (
        <div className="CakeProjects">
            <div className="CakeProject-container">
                <h1 id="CakeProject-title"> Cake Designs</h1>
                <Carousel
                 centered
                 infinite
                 dots
                 slidesPerPage={4} 
                 autoPlay={2000}
                animationSpeed={500}>
                <img className="test-a" src="https://i.ibb.co/5MRW3hK/3.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/c2PRjvf/4.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/hYtjD7v/6.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/JRdhj5H/7.png" alt="" />
                <img className="test-a" src="https://i.ibb.co/Ycjbfv8/8.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/TWqVdZb/9.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/YdjMvc5/10.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/cCxcz9F/11.png" alt="" />
                <img className="test-a" src="https://i.ibb.co/CbwzC9k/12.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/SDkzGjP/13.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/KNg7mnp/14.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/mCRz9Vd/15.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/4SgGSng/16.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/dPSGq7H/17.png" alt="" /> 
        
                <img className="test-a" src="https://i.ibb.co/6szfmbC/33.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/jZj64hV/32.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/B3qmvKS/30.png" alt="" />
                <img className="test-a" src="https://i.ibb.co/H4Gfygq/31.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/8rCfKRH/29.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/RbJWr2T/28.png" alt=""/> 
                <img  className="test-a" src="https://i.ibb.co/6YQ03zv/24.png" alt=""/>
                <img className="test-a" src="https://i.ibb.co/RjtzdZP/23.png" alt="" />
                <img  className="test-a" src="https://i.ibb.co/Rcp5RLw/22.png" alt=""/>
                </Carousel>
      </div>
            </div>
    )
}
