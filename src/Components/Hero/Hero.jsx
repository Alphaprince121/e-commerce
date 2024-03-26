import React from 'react'
import '../Hero/Hero.css'
import hero from '../Assets/hero.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h1>YOUR FEET DESERVE THE BEST ❤️</h1>
                <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES </p>
                <div className="hero-button">
                    <div>Latest Collection</div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="hero-right">
            <img src={hero} alt="" />
            </div>

        </div>
    )
}

export default Hero
