import React from 'react'
import { mainCaroselData } from './MainCaroselData';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const items = mainCaroselData.map((item)=>{
   return  <img className='cursor-pointer' src={item.image} alt='' role='presentation'/>
})

const MainCorosel = () => (
    <div className="relative z-10">
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
       
    />
    </div>
);

export default MainCorosel