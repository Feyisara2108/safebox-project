const Organize = () => {
  return <div>
   
      <section className="py-20 px-4">
        <h2 className="text-center text-4xl font-bold text-[#2c3e50] mb-4">
          Organize your Life. Empower your Family.
        </h2>
        <p className="text-center text-lg text-[#5a6c7d] mb-16">
          Safebox secures your documents and connects your family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              q: "What if your family had no idea about your investments?",
              icon: "📂",
              title: "Everything Family Needs",
              desc: "From Investments to Insurance —all in one place they'll actually understand.",
            },
            {
              q: "What if you didn't have time to organize your life?",
              icon: "📄",
              title: "Intelligently Filed",
              desc: "Our AI sorts documents exactly where they belong, beautifully simple.",
            },
            {
              q: "What if only some things should be shared- with only certain people?",
              icon: "✅",
              title: "Controlled Access",
              desc: "Share what matters with who matters, while keeping full control.",
            },
            {
              q: "What if you couldn't be there when they need you?",
              icon: "🛡️",
              title: "Family Continuity",
              desc: "Set simple emergency handover rules so your family always has what they need.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#b2dfdb4d] to-[#85c1e94d] p-10 rounded-2xl text-center border border-white/30 backdrop-blur-md hover:-translate-y-1 hover:shadow-lg transition"
            >
              <p className="italic font-semibold text-xl text-[#2c3e50] mb-6">
                {item.q}
              </p>
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 text-white text-3xl rounded-xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-2">
                {item.title}
              </h3>
              <p className="text-[#5a6c7d]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

  </div>;
};
export default Organize;