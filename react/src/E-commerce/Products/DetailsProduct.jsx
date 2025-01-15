import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { DataContext } from '../Context/Context';

function DetailsProduct() {
    const { id } = useParams()
    const { products, AddToCart } = useContext(DataContext)
    const DetailsProduct = products.find((product) => product.id == id)
    return (
        <div>
            <h1>Details</h1>
            <div>
                <img src={"/image/" + DetailsProduct.image} alt="hucker" style={{ width: "18rem" }} />
                <h1>Title : {DetailsProduct.title}</h1>
                <span>Price : {DetailsProduct.Price}</span>
                <button className='btn btn-success' onClick={() => AddToCart(DetailsProduct)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default DetailsProduct
