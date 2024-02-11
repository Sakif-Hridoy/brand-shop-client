import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import AddProduct from './components/AddProduct.jsx';
import MyCart from './components/MyCart.jsx';
import Login from './components/Login.jsx';
import BrandDetails from './components/BrandDetails.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import Register from './components/Register.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=> fetch('https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/products')
      },
      {
        path:'/brandDetails/:brand',
        element:<BrandDetails></BrandDetails>,
        loader:()=> fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/products`)
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:()=>fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/products`)

      },
      {
        path:'/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/product/${params.id}`)      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<RouterProvider router={router} />

</AuthProviders>
  </React.StrictMode>,
)
