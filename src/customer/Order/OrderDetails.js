import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5'>
        <div>
        <h1 className='font-bold text-xl py-7 text-left'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
          <OrderTraker activeStep={2}/>
        </div>
        <Grid className='space-y-5' container>
          {
            [1,1,1,1].map((item)=>
              <Grid item container className='shadow-xl rounded-md p-5 border ' 
            sx={{alignItems:"center",justifyContent:"space-between"}}>
              <Grid item xs={6}>
                  <div className='flex items-center space-x-4'>
                    <img  className='w-[5rem] h-[5rem] object-cover object-top' 
                    src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70" 
                    alt="" />
                    <div className='text-left space-y-2 ml-5'>
                      <p className='font-semibold'>Men Slim Mid Rise Balck Jeans</p>
                      <p className='space-x-5 opacity-50 text-xs font-semibold' ><span>Color : Black</span> <span>Size : M</span></p>
                      <p>Seller : Cristtaliyo 2fashion</p>
                      <p>$10000</p>
                    </div>
                  </div>
              </Grid>
              <Grid item>
                  <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{ fontSize: '40px' }} className='px-2'/>
                    <span>Rate & Review product</span>
                  </Box>
              </Grid>
    
            </Grid>
            )
          }
        
        </Grid>
       
    </div>
  )
}

export default OrderDetails