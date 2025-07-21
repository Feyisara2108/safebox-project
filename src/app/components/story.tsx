import React from "react";
import Image from "next/image";

const Story = ()=>{
   return (
     <section className=" bg-[#e8e2d5] pt-16">
        <div className=" py-16 container mx-auto px-5 ">
          <div className="bg-[#0c3429] text-white py-10 md:py-16   lg:py-9 rounded-2xl flex flex-col lg:flex-row items-end gap-10">
            <div className="    relative w-full  xl:max-w-[400px]   ">
            <div className=" ">
                   <div className="   w-full absolute left-0 lg:left-10 bottom-[-90px]  lg:bottom-[-35px] ">
         <div className=" flex  items-end md:items-center gap-  px-1.5">
             <Image
            src="/image/safebox-founders.png"
            alt="Safebox Phone Mockup"
            className=" w-full h-full max-w-[200px] md:max-w-full md:max-h-full max-h-[200px] md:w-70 md:h-50 lg:w-100 lg:h-90 object-contain"
            width={100}
            height={640}
          />
          
              <div className="   lg:hidden text-sm  w-full  ">
                 <h2 className="text-lg  pb-2">Why We're Building Safebox</h2>
                Vignesh Rengasamy & Rajesh Sankarappan
              </div>
         </div>
        </div>
            </div>
            </div>
            <div className="  pt-24 lg:pt-0  px-3  max-w-[900px] ">
           
              <div className="italic  hidden lg:flex flex-col mb-4">
                   <h2 className="text-3xl mb-4">Why We're Building Safebox</h2>
                Vignesh Rengasamy & Rajesh Sankarappan
              </div>
              <p className="mb-4">
                After a near-miss accident, we realized preparedness isn't just
                about insurance or savings. It's about access to the right
                information when it matters most.
              </p>
              <p className="mb-4 flex flex-col lg:flex-row gap-2">
                So we are building Safebox—for our own families, and for the
                millions more like ours.
                <a
                href="#"
                className=" items-center gap-2 font-semibold text-[#a8c8bc]"
              >
                Learn more →
              </a>
              </p>
              
            </div>
          </div>
        </div>
      </section>
   )
}

export default Story