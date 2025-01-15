import React from 'react';
import Layout from './E-commerce/Layout';
import Home from './E-commerce/Home';
import Products from "./E-commerce/Products/Products";
import DetailsProduct from "./E-commerce/Products/DetailsProduct";
import Cart from './E-commerce/Context/Cart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const AppRouter = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:id",
        element: <DetailsProduct />
      },
      {
        path: "/Carts",
        element: <Cart />
      },
    ]
  }])
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
