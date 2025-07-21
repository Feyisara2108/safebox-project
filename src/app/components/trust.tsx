const Trust = () => {
  return <div>

  <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for Trust. Built for Privacy.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Safebox protects your data with advanced encryption—keeping it
            private, secure, and never for sale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [
                "\ud83d\udee1\ufe0f",
                "Bank-Grade Encryption",
                "Protected with AES-256 encryption, trusted by banks.",
              ],
              [
                "\ud83d\udd12",
                "Secure Transfers",
                "Files encrypted during every sync and share.",
              ],
              [
                "\ud83d\udc64",
                "Stateless AI Processing",
                "Analyzed without ever storing your documents.",
              ],
              [
                "\ud83c\udfad",
                "Encrypted Data Masking",
                "Sensitive data replaced with encrypted tokens.",
              ],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-700 mb-4">
                  {icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-900">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  </div>;
};
export default Trust;