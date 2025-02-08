import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 shadow-md shadow-black border rounded-md hover:shadow-2xl" onClick={()=>navigate(`/account/order/${5}`)}>
      <Grid container spacing={20}>
        <Grid item={6}>
          <div className="flex cursor-pointer text-left">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Men Slim Mid Rise Balck Jeans</p>
              <p className="opacity-70 font-semibold text-xs">Size :M</p>
              <p className="opacity-70 font-semibold text-xs">Color : Black</p>
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <p>$1099</p>
        </Grid>
        <Grid item={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on March 8</span>
              </p>
              <p className="text-xs ">your item has been deleverred</p>
            </div>
          )}
          {false && (
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-red-600 mr-2"
              />
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
