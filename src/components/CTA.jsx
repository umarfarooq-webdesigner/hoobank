import React from 'react'

const CTA = () => {
  return (
    <div className="py-20 lg:mx-16 xl:mx-16 md:mx-16 sm:mx-6 mx-3">
      <div className="
          grid 2xl:grid-cols-10 xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-10 sm:grid-cols-5 grid-cols-5
           justify-center items-center py-10
          flex-col bg-black-gradient-2 rounded-[20px] box-shadow
            sm:px-16 px-3 sm:flex-row
          ">
        <div className=" col-span-7 px-4">
          <h1 className=' font-Poppins font-semibold
           2xl:text-[55px] xl:text-[55px] lg:text-[55px] md:text-[50px] sm:text-[45px] text-[40px]'>
            Come try our service now!</h1>
          <p className='mt-5 text-gray-400 font-Poppins font-normal text-[18px] max-w-[470px]'>Everything you need to accept card
            payments and grow your business anywhere on the planet.</p>
        </div>

        <div className=" col-span-3 flex justify-end
             2xl:translate-x-[0px] xl:translate-x-[0px] lg:translate-x-[0px]
             md:translate-x-[0px] translate-x-[30px]">
                <button className="btn bg-blue-gradient text-black py-4 px-6
                            font-Poppins font-medium text-[18px] w-[160px]  
                            text-center rounded-xl my-10" type=' submit'>
                Get Started
              </button>

        </div>




      </div>
    </div>
  )
}

export default CTA