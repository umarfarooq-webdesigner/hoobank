import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted';

const Hero = () => (
  <>
    <div className="hero">
      <div className="lg:ml-16 lg:pt-16 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2  md:pt-16 pt-8 md:ml-16  ml-2 sm:ml-8">

      <div>
        <div className=" justify-center lg:w-[410px] md:w-[410px] 
          xl:w-[410px] sm:w-[410px] px-3 py-2 flex font-Poppins rounded-xl
          bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900">

          <img src={discount} alt="discount" />
          <p className=' ml-2 text-xl'>
            20% 
            <span className='text-gray-400'> Discount For </span>
            1 Month
            <span className='text-gray-400'> Account</span>
          </p>
          </div>
     
        <div className='grid grid-cols-3 mt-2'>
          <div className=' lg:col-span-2 col-span-2'>
            <h1 className='lg:text-[70px] md:text-[70px] xl:text-[70px] text-[40px] sm:text-[60px]  font-bold font-Poppins'>The Next 
              <span className='blue-gradient bg-clip-text text-transparent'> Generation </span>
              Payment Method.
            </h1>

            <p className=' lg:text-xl md:text-xl xl:text-xl sm:text-lg text-sm  text-gray-400 font-Poppins leading-9 mt-4 mb-10'>Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
          </div>

          <div className='mt-4  lg:col-span-1 pt-10 hidden sm:block'>
            < GetStarted/>            
          </div>
        </div>
     
      </div>
        
        <div className="">
          <img src={robot}  className='w-[100%] h-[100%] relative z-[5]'/>
            <div className=' absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className=' absolute z-[1] w-[40%] h-[80%] bottom-40 white__gradient' />
            <div className=' absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

        </div>

        <div className='lg:hidden md:hidden xl:hidden block sm:hidden justify-center  pt-10 pb-2'>
            < GetStarted/>            
          </div>

      </div>
    </div>
  

  </>
);

export default Hero