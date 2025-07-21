const Header =()=>{
  return(
     <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-screen-xl mx-auto px-5 py-6 flex justify-between items-center">
          <div className="relative flex items-center text-2xl font-bold text-[#2d5a4e]">
            <span className="relative block w-10 h-10 mr-3 rounded-lg bg-gradient-to-br from-[#2d5a4e] to-[#4a9d7a]">
              <span className="absolute top-2 left-2 w-6 h-6 bg-white opacity-90 rounded"></span>
            </span>
            safebox
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-full bg-[#2d5a4e] hover:bg-[#1f3e35] transition-transform transform hover:-translate-y-0.5"
          >
            ♡ Join the Waitlist
          </a>
        </div>
      </header>
  )
}

export default Header;