import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    { lable: "On the Way", value: "on_the_way" },
    { lable: "Delevered", value: "delevered" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "returned" },
  ];
  return (
    <div className="lg:px-20 px-5">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 text-left">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Orders Status</h1>

              {orderStatus.map((option) => {
                return (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      defaultValue={option.value}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus-ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.lable}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} sx={{ mt: 2 }}>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <OrderCard key={item} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
