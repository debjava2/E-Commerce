import React from 'react'
import MainCorosel from '../../components/HomeCorosel/MainCorosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
//import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
         <MainCorosel/>
         <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
          <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
          <HomeSectionCarosel data={mens_kurta} sectionName={"Women Sari"}/>
         </div>
         {/* <Footer/> */}
    </div>
  )
}

export default HomePage