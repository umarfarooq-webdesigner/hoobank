import React from 'react'
import { arrowUp } from '../assets';
const GetStarted = () => (
    <>
      <div className="getStarted  lg:px-24 md:px-16 px-10 xl:translate-x-[-8rem] xl:translate-y-[-2rem]">
        <div className="w-[140px] h-[140px] rounded-full 
              blue-gradient
              p-[2px]  cursor-pointer">
          <div className=" bg-black w-[100%] h-[100%] rounded-full flex justify-center items-center text-center">
              <p className='font-Poppins text-xl font-bold'>
                    <span className='blue-gradient bg-clip-text text-transparent float-left mr-2'>Get</span>
                      <img src={arrowUp} alt="" className=''/>
                    <span className='blue-gradient bg-clip-text text-transparent '>Started</span>
                </p>
          </div>
        </div>
      </div>
    
    </>
  );


export default GetStarted