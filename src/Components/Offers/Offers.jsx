import React from 'react'
import '../Offers/Offers.css'
import img from '../Assets/offer.png'

const Offers = () => {
    return (
        <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={img} alt="" />
        </div>

        </div>
    )
}

export default Offers
