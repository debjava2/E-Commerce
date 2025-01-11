import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
const items = [1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

const TestCarousel = () => {
  const carouselRef = useRef(null); // Ref to control the carousel programmatically

  // Function to go to the previous slide
  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  // Function to go to the next slide
  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  return (
    <div>
    <div className="relative p-5">
      <AliceCarousel
        ref={carouselRef} // Attach the ref to the AliceCarousel component
        // mouseTracking
        // keyboardNavigation
        items={items}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
      />
      
      {/* Custom previous button */}
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

      {/* Custom next button */}
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
    </div>
    </div>
  );
};

export default TestCarousel;
