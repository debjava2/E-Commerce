
import React from 'react'
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigation = useNavigate();
  const handleCheckout = () => {
    navigation("/checkout?step=2")
  }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
          <div className='col-span-2'>
            {
              [1,2,3,4,5].map((item) => <CartItem key={item} />)
            }
        
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
            <div className='border'>
              <p className='uppercase opacity-60 pb-4 text-left font-bold'>Price Details</p>
              <hr/>
              <div className='space-y-3 font-semibold mb-10'>
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>$199</span>
                  </div>
                  {/*discount*/}

                  <div className='flex justify-between pt-3'>
                    <span>Discount</span>
                    <span className='text-green-600'>-$199</span>
                  </div>
                  {/*total*/}

                  <div className='flex justify-between pt-3'>
                    <span>Dilivery Charges</span>
                    <span className='text-green-600'>Free</span>
                  </div>

                  {/*button*/}

                  <div className='flex justify-between pt-3 font-bold'>
                    <span>Total Amount</span>
                    <span className='text-green-600'>$199</span>
                  </div>
              </div>
              <div>
                <Button variant="contained" onClick={()=>handleCheckout()} className='w-full mt-5' sx={{ px:"2.5rem",py:".7rem",bgcolor:"#9155fd" }}>Checkout</Button>
              </div>
            </div>
        </div>
        </div>
       
    </div>
  
  )
}

export default Cart