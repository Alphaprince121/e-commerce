import React from 'react'
import '../MainProduct/MainProduct.css'
import { IoIosArrowForward } from "react-icons/io";

const MainProduct = (props) => {
    const {product} = props
    return (
        <div className='mainproduct'>
        HOME <IoIosArrowForward/> SHOP <IoIosArrowForward/> {product.category} <IoIosArrowForward/> {product.name}

        </div>
    )
}

export default MainProduct
