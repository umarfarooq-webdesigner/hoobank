import React from 'react'
import { card } from '../assets';

const CardDeal = () => (
  <>
    <div className="billing lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16 xr:ml-16 md:mr-16 sm:mr-6 mx-3 pt-28">
      <div className=" grid xl:grid-cols-10 grid-cols-5 gap-20">
      
        <div className=" font-Poppins xl:col-span-5 lg:col-span-3 col-span-5 ">
            <h1 className=' 2xl:text-[55px] xl:text-[55px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px] font-semibold'>
            Find a better card deal in few easy steps</h1>
            <p className='text-[20px] text-gray-400 my-5 mr-10'>
                We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.
            </p>

            <button  className="
                btn bg-blue-gradient text-black py-4 px-6
                font-Poppins font-medium text-[18px] w-[160px]  
                text-center rounded-xl my-10" type=' submit'>
                  Get Started
          </button>
            
        </div>

        <div className=" xl:col-span-5 lg:col-span-5 col-span-5">
            <img src={card} className='w-[100%] h-[100%] relative z-[5]'/>
        </div>
      </div>  
    </div>  
  </>

);

export default CardDeal