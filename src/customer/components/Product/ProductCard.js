import React from "react";
import "./ProductCard.css";
const ProductCard = ({product}) => {
  console.log(product);
  const{imageUrl,discountPersent,discountedPrice,brand,price,description}=product
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
  <div className="h-[20rem]">
    <img
      className="h-full w-full object-cover object-left-top"
      src={imageUrl}
      alt=""
    />
  </div>
  <div className="textPart bg-white p-3 text-left space-y-1">
    <p className="font-bold opacity-60 truncate">{brand}</p>
    <p className="truncate">{description}</p>
    <div className="flex items-center space-x-2">
      <p className="font-semibold">${discountedPrice}</p>
      <p className="line-through opacity-50">${price}</p>
      <p className="text-green-500 font-semibold">{discountPersent}% off</p>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
