import React from 'react';
import {Link} from "react-router-dom";
import "./nav.css"

function Navbar() {
  return (
    <header className='m-2 p-2'>
      <div className='container nav'>
      <h1>Store</h1>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/Carts"}>Carts</Link></li>
      </ul>
      </div>
    </header>
  )
}

export default Navbar;
