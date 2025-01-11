import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const OrderTraker = ({activeStep}) => {
    const steps=[
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out for Delivery",
        "Delivered"
    ]
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderTraker