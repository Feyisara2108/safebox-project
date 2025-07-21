const Footer = () => {
  return (
    <div className="footer">
     <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-green-700 font-semibold mb-4">Contact Us</h3>
            <a
              href="mailto:hello@safebox.life"
              className="block text-gray-300 hover:text-green-700 mb-2"
            >
              hello@safebox.life
            </a>
            <div className="flex gap-4 mt-4">
              {["\ud83d\udcf7", "\ud83d\udcbc", "\ud83d\udc26"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-all"
                  >
                    {icon}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-green-700 font-semibold mb-4">Resources</h3>
            {["Note From Our Founders", "Blogs", "FAQ", "Privacy Policy"].map(
              (link, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-gray-300 hover:text-green-700 mb-2"
                >
                  {link}
                </a>
              )
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white text-green-900 flex items-center justify-center rounded-md font-bold text-lg">
                S
              </div>
              <span className="font-bold text-xl">safebox</span>
            </div>
            <p className="text-gray-400">By The Beyond Company</p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500 border-t border-gray-800 pt-6">
          &copy; 2024 Safebox. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default Footer;