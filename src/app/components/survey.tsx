const Survey = () => {
  return <div>
   
    <section className="py-20 bg-[#e8e2d5] text-center">
        <div className="container mx-auto px-5">
          <h1 className=" text-4xl xl:text-6xl font-bold text-gray-800 mb-4">
            We asked 600+ Families about their struggles*
          </h1>
          <p className="text-lg lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
            It turns out most families are more unprepared than we think.
          </p>

          <div className=" flex   overflow-x-auto    mb-8">
            <div className="bg-white rounded-2xl w-full  p-8 shadow-md hover:-translate-y-1 transition">
             <div className=" w-[300px] m-auto md:h-[500px] ">
                 <div className="md:w-28 md:h-28 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-bold bg-[conic-gradient(at_top_left,_#dc3545_61%,_#f8d7da_61%)] mb-6">
                61%
              </div>
              <p className="text-gray-700 font-medium">
                Have their life data scattered across various places
              </p>
             </div>
            </div>

            <div className="bg-white rounded-2xl w-full  p-8 shadow-md hover:-translate-y-1 transition">
             <div className=" w-[200px] md:w-[300px] m-auto md:h-[500px] ">
                 <div className="md:w-28 md:h-28 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-bold bg-[#dc3545] mb-6">
                85%
              </div>
              <p className="text-gray-700 font-medium">
                Have not shared critical documents with their family
              </p>
             </div>
            </div>

            <div className="bg-white w-full  rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
             <div className=" w-[200px] md:w-[300px] m-auto md:h-[500px] ">
                 <div className="md:w-28 md:h-28 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-bold bg-[#dc3545] mb-6 rounded-[60%_60%_40%_40%/60%_60%_40%_40%]">
                94%
              </div>
              <p className="text-gray-700 font-medium">
                Families are unprepared for managing important information
                during emergencies
              </p>
             </div>
            </div>
          </div>

          <p className="text-sm italic text-gray-500">
            * Safebox user research, Jan 2025, n = 612 urban Indians aged 30–65.
          </p>
        </div>
      </section>

  </div>;
};

export default Survey;