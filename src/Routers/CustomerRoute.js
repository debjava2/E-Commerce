import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'

const CustomerRoute = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<HomePage/>} ></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:levelThree' element={<Product/>} />
            <Route path='/:product/:productId' element={<ProductDetails/>} />
          
           

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