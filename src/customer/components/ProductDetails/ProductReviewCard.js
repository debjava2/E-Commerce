import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
    <Grid container spacing={2} gap={5} alignItems="flex-start">
      {/* Avatar Section */}
      <Grid item xs={1}>
        <Box display="flex" justifyContent="flex-start">
          <Avatar
            className="text-white"
            sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
          >
            R
          </Avatar>
        </Box>
      </Grid>

      {/* Content Section */}
      <Grid item xs={9}>
        <div className="space-y-2 text-left pl-2"> {/* Tailwind padding */}
          <div>
            <p className="font-bold">Ram</p>
            <p className="text-gray-500">April 5, 2023</p>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p className="text-gray-700">Nice, Product I love this shirt</p>
        </div>
      </Grid>
    </Grid>
  </div>

  
  )
}

export default ProductReviewCard