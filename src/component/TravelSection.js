import React from 'react'
import Button from './Button';
import '../App.css';
import './TravelSection.css';

function TravelSection() {
    return (
        <div className='tour-container'>
         <video src= "/videos/video-2.mp4" autoPlay loop muted/>
          <h1>Let's Explore the World</h1>  
          <p>Come And Join Us ?</p> 
          <div className="tour-btns">
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Dive into Adventure</Button>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Play <i className='far fa-play-circle'/></Button>

          </div>
        </div>
    )
}

export default TravelSection
