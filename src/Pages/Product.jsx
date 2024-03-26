import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import MainProduct from '../Components/MainProduct/MainProduct';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';


const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
    return (
        <div>
        <MainProduct product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>

        </div>
    )
}

export default Product