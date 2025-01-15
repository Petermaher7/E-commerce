import React, { createContext, useState } from 'react'

export const DataContext = createContext()

function DataProvider({ children }) {
    const [Cart, setCart] = useState(JSON.parse(localStorage.getItem("Context")) || [])
    const [products] = useState([
        {
            id: 1,
            title: "T-shirt",
            price: 300,
            image: "1.jpg"
        },
        {
            id: 2,
            title: "T-shirt",
            price: 200,
            image: "2.jpg"
        },
        {
            id: 3,
            title: "T-shirt",
            price: 350,
            image: "3.jpg"
        },
        {
            id: 4,
            title: "Smart watch",
            price: 500,
            image: "4.png"
        },
        {
            id: 5,
            title: "Smart watch",
            price: 600,
            image: "5.png"
        },
        {
            id: 6,
            title: "Smart watch",
            price: 600,
            image: "6.png"
        },]
    )
    const AddToCart = (product) => {
        const productFind = Cart.findIndex((item) => item.id === product.id)
        let updatedCart;
        if (productFind!== -1) {
            updatedCart = [...Cart]
            updatedCart[productFind].Count += 1
        }else{
            updatedCart=[...Cart,{...product,Count:1}]
        }
    
        setCart(updatedCart)
        localStorage.setItem("Context",JSON.stringify(updatedCart))
    }
    const changeQuantity = (id,newQuantity)=>{
      const updatedCart= Cart.map((product)=>product.id===id ? {...product,Count:newQuantity} : product).filter((product)=>product.Count>0)
       setCart(updatedCart)
        localStorage.setItem("Context",JSON.stringify(updatedCart))
    }
    return (
        <DataContext.Provider value={{products,AddToCart,Cart,changeQuantity}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
