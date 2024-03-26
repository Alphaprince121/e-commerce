import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star1 from '../Assets/star_dull_icon.png'
import star from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star1} alt="" />
                <p>(124)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-price-old">&#8377;{product.old_price}</div>
                <div className="productdisplay-price-new">&#8377;{product.new_price}</div>
            </div>
            <div className="productdisplay-right-dscripition">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A facere iste accusamus cupiditate nam deserunt, libero nobis nisi? Dolorum odit sed deleniti corporis modi culpa, possimus velit fugiat iste aspernatur!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
        </div>
    )
}

export default ProductDisplay
