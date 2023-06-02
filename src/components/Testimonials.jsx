import React from 'react'

const Testimonials = () => {
  return (
    <>
    <div className="billing lg:ml-16 xl:ml-16 md:ml-16 sm:ml-6 lg:mr-16 xl:mr-16 md:mr-16 sm:mr-6 mx-3 pt-28">
      <div className=" grid xl:grid-cols-10 grid-cols-5 xl:gap-20">
      
        <div className=" font-Poppins xl:col-span-5 lg:col-span-3 col-span-5">
            <h1 className=' 2xl:text-[55px] xl:text-[55px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px] font-semibold'>
            What people are saying about us</h1>

            
        </div>    
        <div className=" xl:col-span-5 lg:col-span-5 col-span-5">
          <p className='text-[20px] text-gray-400  mr-20 py-10'>
              Everything you need to accept card payments and grow your business anywhere on the planet.
              </p>
        </div>

      </div>  
    </div>  
  </>


    )
}

export default Testimonials