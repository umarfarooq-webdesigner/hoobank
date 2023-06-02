import React from 'react'
import { bill, apple, google } from '../assets';

const Billing = () => (
  <>
    <div className="billing lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16 xr:ml-16 md:mr-16 sm:mr-6 mx-3 pt-28">
      <div className=" bg-slate- grid xl:grid-cols-10 grid-cols-5">
        <div className="xl:order-1 order-2 xl:col-span-5 lg:col-span-5 col-span-5">
            <img src={bill} className='w-[100%] h-[100%] relative z-[5]'/>
            {/* <div className=' absolute z-[3] -left-1/2  w-[50%] h-[50%] top-0 rounded-full  white__gradient' /> */}
            {/* <div className=' absolute z-[0] -left-1/2  w-[50%] h-[50%] bottom-0 rounded-full  pink__gradient' /> */}

        </div>

        <div className=" font-Poppins xl:order-2 order-1 xl:col-span-5 lg:col-span-3 col-span-5">
            <h1 className=' 2xl:text-[55px] xl:text-[55px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px]
             xl:pt-24 font-semibold'>Easily control your billing & invoicing.</h1>
            <p className='text-[20px] text-gray-400 my-5 mr-10'>We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>

            <div className="flex mt-14 lg:mb-12 mb-12">
              <img src={apple} />
              <img src={google} className=' ml-5'/>
            </div>
        </div>

      </div>  
    </div>  
  </>
);

export default Billing