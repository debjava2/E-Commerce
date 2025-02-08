
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import React from 'react';
import HomePage from './customer/pages/HomePage/HomePage';
//import Navigation2 from './customer/components/Navigation/Navigation2';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Footer from  '../src/customer/components/Footer/Footer'//'../../components/Footer/Footer'
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/Order/Order';
import OrderDetails from './customer/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';
import Navigation2 from './customer/components/Navigation/Navigation2';
//import Navigation2 from './customer/components/Navigation/Navigation2';

function App() {
 
  return (
    <div>
      
          
            <Routes>
              <Route path='/*' element={<CustomerRoute/>}></Route>
            </Routes>
             {/* <HomePage/> */}
              {/* <Product/> */}
              {/* <ProductDetails/> */}
              {/* <Cart/> */}
              {/* <Checkout/> */}
              {/* <Order/> */}
              {/* <OrderDetails/> */}
          
          
           
    </div>
  );
}

export default App;
