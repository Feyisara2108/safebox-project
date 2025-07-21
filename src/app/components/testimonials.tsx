const Testimonials = () => {
  return <div>
   
    <section className="py-20 bg-[#4a5568] text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold mb-4">
            The Quiet Burden of Responsibility
          </h2>
          <p className="text-lg opacity-90 mb-12">
            Behind every statistic is a family with a story. Read theirs, think
            about yours.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "👨",
                text: "I've invested in stocks, FDs, and real estate, but my family knows only a fraction. If I'm not around, they might miss out—I need everything in one place.",
                name: "Vikram",
                title: "Business Owner",
              },
              {
                icon: "👩",
                text: "After my father passed, I had no idea where to find his insurance, bank accounts, and property documents—it took months to track everything down.",
                name: "Neha",
                title: "Working Mother",
              },
              {
                icon: "👨",
                text: "I manage our finances, but my wife knows little about them. If anything happens to me, she'd struggle—I need a simple way to keep everything accessible.",
                name: "Rajesh",
                title: "Senior Manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#5a6c7d] p-8 rounded-2xl hover:-translate-y-1 transition"
              >
                {/* <p className="italic mb-6">"{item.text}"</p> */}
                <p className="italic mb-6">&quot;{item.text}&quot;</p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#718096] flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-80">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  </div>;
};


export default Testimonials;