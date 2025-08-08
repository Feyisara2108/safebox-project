import Image from "next/image";
import { FaCube } from "react-icons/fa";

const Hero =()=>{
    return(
        <section className="  pt-12 bg-gradient-to-br from-gray-100 to-gray-200 text-center ">
        <div className="container mx-auto px-5">
          <div className="pb-12 xl:pb-24 flex  justify-center gap-3 items-center">
            <FaCube className=" text-6xl text-[#2d5a4e]" />
            <h1 className=" text-5xl font-bold  text-[#2d5a4e]">SAFEBOX</h1>
          </div>
          <h2 className=" text-2xl md:text-4xl xl:text-8xl font-bold text-[#2d5a4e] mb-6 leading-tight">
            Your Family Deserves to Know
          </h2>
          <p className="text-lg xl:text-4xl text-gray-600 max-w-7xl mx-auto mb-8">
            Safebox is the Family Data Organizer that helps you securely store
            and share vital documents like IDs, insurance, and investments ,with
            your loved ones.
          </p>
          <button className=" items-center gap-2 px-6 py-3  md:w-[450px] md:h-[100px]  text-white font-semibold md:text-4xl rounded-full bg-[#2d5a4e] hover:bg-[#1f3e35] transition-transform transform hover:-translate-y-0.5">
            ♡ Join the Waitlist
          </button>
         
          <div className="mt-10 text-gray-500">
            <div className="flex justify-center -space-x-4 mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-4 border-white bg-gradient-to-br from-[#2d5a4e] via-[#4a9d7a] to-[#45b7d1]"
                ></div>
              ))}
            </div>
            <p className=" text-2xl">
              Join 800+ families already on the waitlist
            </p>
          </div>
        </div>

         <div className=" pt-20 ">
          <div className="  md:flex   items-end gap-3 justify-center">
             <div className="  ">
          <Image
            src="/safebox-card-digital-access.png"
            alt="Safebox Phone Mockup"
            className=" w-60 h-52 xl:w-70 xl:h-110 hidden md:flex object-contain"
            width={200}
            height={640}
          />
        </div>
          <div className=" ">
          <Image
            src="/safebox-card-personal.png"
            alt="Safebox Phone Mockup"
            className=" hidden md:flex w-60 h-52 xl:w-80 xl:h-130 object-contain"
             width={320}
             height={640}
          />
        </div>
        <div className=" ">
          <Image
            src="/safebox-app-dashboard.png"
            alt="Safebox Phone Mockup"
            className="mx-auto w-70 h-80 xl:w-140 xl:h-160  object-contain "
            width={400}
            height={640}
          />
        </div>
          <div className=" ">
          <Image
            src="/safebox-card-bank-accounts.png"
            alt="Safebox Phone Mockup"
            className=" hidden md:flex w-60 h-52 xl:w-80 xl:h-130 object-contain "
            width={320}
            height={640}
          />
        </div>
          <div className=" ">
          <Image
            src="/safebox-card-household.png"
            alt="Safebox Phone Mockup"
            className=" hidden md:flex w-60 h-52 xl:w-70 xl:h-110 object-contain "
            width={320}
            height={640}
          />
        </div>
         </div>
       </div>
      </section>
    )
}

export default Hero;