import React from 'react'
import { quotes, people01, people02, people03 } from '../assets'

const FeedBackCard = () => {
  return (
      <div className="feedbackCard  lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16
              xl:mr-16 md:mr-16 sm:mr-6 mx-3 pt-20 relative
              grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">

        {/* <div class="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div> */}

                <div className=" px-10 py-12 font-Poppins 
                flex justify-between flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                  
                  <img src={quotes} alt="doubble_quotes" className='w-[42px] h-[27px] object-contain'/>
                  <p className=' text-[18px] font-normal my-10 leading-[32px]'>Money is only a tool. It will take you wherever
                    you wish, but it will not replace you as the driver.</p>

                    <div className="grid grid-cols-4 w-full ">
                          <div className=" col-span-1  flex justify-center">
                              <img src={people01} alt="people1" className='w-[48px] h-[48px] rounded-full'/>
                          </div>
                          <div className=" col-span-3 ml-2">
                              <h1 className=' font-semibold text-[20px]'>Herman Jensen</h1>
                              <p className=' font-normal text-[16px] text-gray-400'>Founder & Leader</p>
                          </div>
                    </div>

                </div>

                <div className=" px-10 py-12 font-Poppins 
                    flex justify-between flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card
                   xl:translate-x-[-150px] lg:translate-x-[-60px] 2xl:translate-x-[0px] translate-x-[0px]
                ">
                  
                  <img src={quotes} alt="doubble_quotes" className='w-[42px] h-[27px] object-contain'/>
                  <p className=' text-[18px] font-normal my-10 leading-[32px]'>
                      Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
  
                    <div className="grid grid-cols-4 w-full ">
                          <div className=" col-span-1  flex justify-center">
                              <img src={people02} alt="people1" className='w-[48px] h-[48px] rounded-full'/>
                          </div>
                          <div className=" col-span-3 ml-2">
                              <h1 className=' font-semibold text-[20px]'>Steve Mark</h1>
                              <p className=' font-normal text-[16px] text-gray-400'>Founder & Leader</p>
                          </div>
                    </div>

                </div>

                <div className=" px-10 py-12 font-Poppins 
                flex justify-between flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                  
                  <img src={quotes} alt="doubble_quotes" className='w-[42px] h-[27px] object-contain'/>
                  <p className=' text-[18px] font-normal my-10 leading-[32px]'>
                        It is usually people in the money business, finance,
                        and international trade that are really rich.
                    </p>

                    <div className="grid grid-cols-4 w-full ">
                          <div className=" col-span-1  flex justify-center">
                              <img src={people03} alt="people1" className='w-[48px] h-[48px] rounded-full'/>
                          </div>
                          <div className=" col-span-3 ml-2">
                              <h1 className=' font-semibold text-[20px]'>Kenn Gallagher</h1>
                              <p className=' font-normal text-[16px] text-gray-400'>Founder & Leader</p>
                          </div>
                    </div>

                </div>


        {/* <div className=" flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"> */}
          {/* </div> */}

       </div>
    )
}

export default FeedBackCard