const Introduction = () => {
  return (
    <div>
       <section className="text-center py-20 px-4 bg-white/90 backdrop-blur   ">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#2c3e50] to-green-600 bg-clip-text text-transparent mb-6">
          Introducing Safebox
        </h1>
        <p className="text-lg md:text-xl text-[#5a6c7d] max-w-xl mx-auto mb-10">
          The Family Data Organizer built to organize your life and protect the
          ones you love.
        </p>
        <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-green-400 text-white text-4xl rounded-2xl mx-auto mb-10 shadow-lg animate-bounce">
          <div className="flex items-center justify-center h-full">S</div>
        </div>
    
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: "📁",
              title: "Personal documents",
              desc: "Everything in One Trusted Place",
            },
            { icon: "🎯", title: "Be the First to Experience" },
            {
              icon: "🔒",
              title: "Manage access",
              desc: "Give the right access to the right people.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-xl shadow-md w-72 p-6 text-center backdrop-blur transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-600 to-green-400 text-white text-2xl rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
                {card.title}
              </h3>
              {card.desc && (
                <p className="text-[#5a6c7d] text-sm">{card.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;


