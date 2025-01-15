import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './Context'


function Cart() {
  const { Cart, changeQuantity } = useContext(DataContext)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let totalprice = Cart.reduce((acc, item) => acc + item.price * item.Count, 0)
    setTotal(totalprice)
  }, [Cart])
  const [number, setNumber] = useState(0)
  const handleClick = () => {
    const newNumber = { total }
    setNumber(newNumber);
    console.clear()
    console.log(newNumber)
  }
  return (
    <>
      <table className='table m-2 container mx-auto'>
        <thead>
          <tr>
            <th className='border p-2 m-2 text-center'>ID</th>
            <th className='border p-2 m-2 text-center'>Name</th>
            <th className='border p-2 m-2 text-center'>Price</th>
            <th className='border p-2 m-2 text-center'>Count</th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((item, index) => (
            <tr key={index}>
              <td className='border p-2 text-center'>{item.id}</td>
              <td className='border p-2 text-center'>{item.title}</td>
              <td className='border p-2 text-center'>{item.price}</td>
              <td className='border p-2 text-center'>
                <button className='btn btn-primary m-2' onClick={() => changeQuantity(item.id, item.Count + 1)}>+</button>
                {item.Count}
                <button className='btn btn-warning m-2' onClick={() => changeQuantity(item.id, item.Count - 1)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <br />
        <br />
        <h1 className='m-2'>Total : {total} EG </h1>
        <button className='btn btn-outline-success m-2' onClick={handleClick} >Buy Now</button>
      </div>
      <footer className='bg-dark text-center'>
        <h1 className='text-light m-2'>Contact us</h1>
        <br />
        <i className="fa-brands fa-facebook m-2 p-1 text-light">  peter maher</i>
        <br />
        <i className="fa-brands fa-instagram m-2 p-1 text-light">  peter_frasha</i>
        <br />
        <i className="fa-brands fa-whatsapp m-2 p-1 text-light">  01224044529</i>

      </footer>
    </>
  )
}

export default Cart
