import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Clients = () => {
  return (
      <>
        <div className="clients  lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16
            xl:mr-16 md:mr-16 sm:mr-6 mx-3 pt-20 
            grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2
            gap-4
                
        ">
            <img src={airbnb} alt="airbnb"     className='w-[100px] sm:w-[192px] object-contain mx-auto '/>
            <img src={binance} alt="binance"   className='w-[100px] sm:w-[192px] object-contain mx-auto pt-4' />
            <img src={coinbase} alt="coinbase" className='w-[100px] sm:w-[192px] object-contain mx-auto pt-4' />
            <img src={dropbox} alt="dropbox"   className='w-[100px] sm:w-[192px] object-contain mx-auto pt-4' />

        </div>
      
      
      
      </>
  )
}

export default Clients