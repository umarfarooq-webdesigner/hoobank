import React from 'react'

const Stats = () => (
  <>
    <div className="stats">
      <div className="
       lg:ml-16 md:ml-16 sm:ml-10  justify-center
       lg:mr-16 md:mr-16 sm:mr-8 mr-2 
       py-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">

        <div className=" font-Poppins">
          <p className=' 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[25px]  font-semibold flex'>3800+
          <div className=" translate-y-[-6px] ml-3 blue-gradient first-letter bg-clip-text text-transparent">
            <span className=' uppercase 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[15px] font-normal '> active users</span>
          </div>
          </p>
        </div>

        <div className=" font-Poppins">
          <p className=' 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[25px] font-semibold flex '>230+
          <div className=" pt-1  ml-3 blue-gradient first-letter bg-clip-text text-transparent
            sm:translate-y-[-10px] xl:translate-y-[0px] lg:translate-y-[0px] md:translate-y-[-5px] translate-y-[-10px]
           leading-10 ">
            <span className=' uppercase 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[15px] font-normal'> companys trusted</span>
          </div>
          </p>
        </div>

        <div className=" font-Poppins">
          <p className=' 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[25px] font-semibold flex'>$230M+
          <div className=" translate-y-[-6px] ml-3 blue-gradient first-letter bg-clip-text text-transparent">
            <span className=' uppercase 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[15px] font-normal '> transactions</span>
          </div>
          </p>
        </div>


      </div>

    </div>
  </>
);
export default Stats