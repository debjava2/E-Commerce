import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarosel = ({data,sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const [activeIndex,setActiveIndex]=useState(0);

  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard product={item} />
  ));
 

  const carouselRef = useRef(null); // Ref to control the carousel programmatically

  // Function to go to the previous slide
  const slidePrev = () => {
    setActiveIndex(activeIndex-1);
    carouselRef.current.slidePrev();
  };

  // Function to go to the next slide
  const slideNext = () => {
    setActiveIndex(activeIndex+1);
    carouselRef.current.slideNext();
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach the ref to the AliceCarousel component
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
        />

        { activeIndex !==items.length-5 && 
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slideNext}
        >
          &#60; {/* Left arrow symbol */}
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      }
        { activeIndex!==0 && 
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slidePrev}
        >
          &#62; {/* Right arrow symbol */}
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
