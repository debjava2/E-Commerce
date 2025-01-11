import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'

const CustomerRoute = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/home' element={<HomePage/>} caseSensitive={true}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        

              {/* <HomePage/> */}
              {/* <Product/> */}
              {/* <ProductDetails/> */}
              {/* <Cart/> */}
              {/* <Checkout/> */}
              {/* <Order/> */}
              {/* <OrderDetails/> */}
        </Routes>
        <div>
        {/* <Footer/> */}
        </div>
    </div>
  )
}

export default CustomerRoute