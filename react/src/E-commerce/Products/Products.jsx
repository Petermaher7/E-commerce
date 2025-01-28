import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context/Context';
import {Link} from "react-router-dom";

function products() {
  const { products,AddToCart } = useContext(DataContext)
  
  return (
    <div>
      <h1 className='m-2'>Products Components</h1>
      <div className='products d-flex flex-wrap justify-content-center '>
        {
          products.map((item,index) => (
            <div className='card m-2 col-sm-6 col-md-4 col-lg-3' key={index}>

             <Link to={`${`/products/`+item.id}`}>
              <img src={`/image/${item.image}`} className='card-img' alt="hucker" style={{ width: "18rem" }} />
             </Link>
              
              <div className='card-body '>
                <h2>{item.title}</h2>
                <span>{item.price} EG </span>
              </div>
              <button className='btn btn-outline-success m-2' onClick={()=>AddToCart(item)}>Add To Cart</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default products
