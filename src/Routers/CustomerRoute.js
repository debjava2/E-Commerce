import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Navigation from '../customer/components/Navigation/Navigation'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/Order/Order'
import OrderDetails from '../customer/Order/OrderDetails'

const CustomerRoute = () => {
  return (
    <div>
        <div>
      <Navigation/>
      </div>
        <Routes>
            <Route path='/' element={<HomePage/>} ></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:levelThree' element={<Product/>} />
            <Route path='/:product/:productId' element={<ProductDetails/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/account/order' element={<Order/>} />
            <Route path='/account/order/:orderId' element={<OrderDetails/>} />
           

              {/* <HomePage/> */}
              {/* <Product/> */}
              {/* <ProductDetails/> */}
              {/* <Cart/> */}
              {/* <Checkout/> */}
              {/* <Order/> */}
              {/* <OrderDetails/> */}
        </Routes>
        <div>
         <Footer/> 
        </div>
    </div>
  )
}

export default CustomerRoute