import React from 'react'
import { star, shield, send } from '../assets';

const Business = () => (
  <div className="business lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16 xr:ml-16 md:mr-16 sm:mr-6 mx-3 pt-28">
    <div className="grid xl:grid-cols-10 grid-cols-5">

      <div className=" font-Poppins lg:mr-[100px]  xl:col-span-5 col-span-4 w-full">
      <h1 className='2xl:text-[61px]  xl:text-[61px]  lg:text-[61px]  md:text-[50px]  sm:text-[40px]  text-[35px]
       2xl:leading-[85px] xl:leading-[85px] lg:leading-[85px] md:leading-[75px] sm:leading-[65px] leading-[65px] font-semibold'>
          You do the business, we'll handle the money.</h1>
        <p className=' text-gray-400 my-5 text-[25px]'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          <button  className="
                btn bg-blue-gradient text-black py-4 px-6
                font-Poppins font-medium text-[18px] w-[160px]  
                text-center rounded-xl my-10" type=' submit'>
                  Get Started
          </button>
          </div>

      <div className=" xl:ml-20 font-Poppins xl:col-span-5 col-start-2 col-span-4 
            md:translate-x-[-60px] sm:translate-x-[-60px] lg:translate-x-[-60px]">
            <div className="grid grid-cols-10 feature-card p-6 rounded-[20px] mb-6 mt-[30px]">
              <div className=' col-span-1
                      bg-dimBlue w-[64px] h-[64px] rounded-full
                      justify-center items-center flex'>
                  <img src={star} />
              </div>
              <div className=' col-span-9 ml-5 xl:pl-2 lg:pl-4 md:pl-4 sm:pl-6 pl-8'>
                  <h1 className='text-xl font-bold mb-1'>Rewards</h1>
                  <p className=' text-gray-400 pr-5'>
                    The best credit cards offer some tantalizing combinations of promotions and prizes.</p>
              </div>
            </div>

            <div className="grid grid-cols-10 feature-card p-6 rounded-[20px] mb-6 xl:mt-[60px] mt-[30px]">
              <div className=' col-span-1
                      bg-dimBlue w-[64px] h-[64px] rounded-full
                      justify-center items-center flex'>
                  <img src={shield} />
              </div>
              <div className=' col-span-9 ml-5 xl:pl-2 lg:pl-4 md:pl-4 sm:pl-6 pl-8'>
                  <h1 className='text-xl font-bold mb-1'>100% Secured</h1>
                  <p className=' text-gray-400 pr-5'>
                    We take proactive steps make sure your information and transactions are secure.</p>
              </div>
            </div>

            <div className="grid grid-cols-10 feature-card p-6 rounded-[20px] mb-6 xl:mt-[60px] mt-[30px]">
              <div className=' col-span-1
                      bg-dimBlue w-[64px] h-[64px] rounded-full
                      justify-center items-center flex'>
                  <img src={send} />
              </div>
              <div className=' col-span-9 ml-5 xl:pl-2 lg:pl-4 md:pl-4 sm:pl-6 pl-8'>
                  <h1 className='text-xl font-bold mb-1'>Balance Transfer</h1>
                  <p className=' text-gray-400 pr-5'>
                  A balance transfer credit card can save you a lot of money in interest charges.</p>
              </div>
            </div>

      </div>


    </div>
  </div>
);

export default Business