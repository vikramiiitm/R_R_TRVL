import React from 'react';
import './HeroSection.css'
import {Button} from './Button'
import '../App.css'

const HeroSection = ()=> {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <div className="hero-btns">
                <Button className="btns"
                buttonStyle="btn--outline"
                buttonSize = "btn--large">
                    Get Started
                </Button>
                <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize = "btn--large">
                    Watch trailer <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;