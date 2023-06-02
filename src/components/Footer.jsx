import React from 'react'
import { logo, instagram, facebook, twitter, linkedin } from '../assets'


const Footer = () => {
  return (
    <>
      <div className="py-20 lg:mx-16 xl:mx-16 md:mx-16 sm:mx-6 mx-3">

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-1
            md:grid-cols-1 sm:grid-cols-1 grid-cols-1">

            <div className=" col-span-1 ">
                <img src={logo} alt="hoobank" className='w-[200px] h-[72px] object-contain' />
                <p className=' font-Poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w[310px]'>
                  A new way to make payments <br /> easy, reliable and secure.</p>
            </div>
      
            <div className=" col-span-2  2xl:pl-20 xl:pl-20
                2xl:pt-0 xl:pt-0 pt-10 
            ">
              <div className=" grid 2xl:grid-cols-3 xl:grid-cols-3
                  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
                  <div className="">
                    <h1 className='text-[18px] font-Poppins font-medium leading-[27px]'>Useful Links</h1>
                      <ul>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4 mt-4'>Content</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>How it Works</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Create</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Explore</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Terms & Services</li>
                      </ul>
                  </div>

                  <div className="">
                    <h1 className='text-[18px] font-Poppins font-medium leading-[27px]'>Community</h1>
                      <ul>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4 mt-4'>Help Center</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Partners</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Suggestions</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Blog</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Newsletters</li>
                      </ul>
                  </div>


                  <div className="">
                    <h1 className='text-[18px] font-Poppins font-medium leading-[27px]'>Partner</h1>
                      <ul>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4 mt-4'>Our Partner</li>
                        <li className=' font-Poppins font-normal text-[16px] leading-[24px]
                        text-gray-400 hover:text-[#5ce1e6] cursor-pointer mb-4'>Become a Partner</li>
                      </ul>
                  </div>

                </div>

            </div>

        </div>

      <hr className='my-6 border border-gray-700'/>

        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1">

          <div className="">
            <h1 className=' font-normal font-Poppins mb-6
            2xl:text-left  xl:text-left text-center text-[18px] leading-[27px]'>
              2022 HooBank. All Rights Reserved.</h1>
          </div>

          <div className="flex 2xl:justify-end xl:justify-end justify-center mt-">
              <img src={instagram} alt="instagram" className='mr-6 w-[21px] h-[21px] object-contain' />
              <img src={facebook} alt="facebook"   className='mr-6 w-[21px] h-[21px] object-contain' />
              <img src={twitter} alt="twitter"     className='mr-6 w-[21px] h-[21px] object-contain' />
              <img src={linkedin} alt="linkedin"   className='mr-6 w-[21px] h-[21px] object-contain' />
          </div>
        </div>


      </div>
    </>
    )
}

export default Footer