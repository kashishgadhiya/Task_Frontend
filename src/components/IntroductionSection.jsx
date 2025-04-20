import React from "react";

const IntroductionSection = () => {
  const infoItems = [
    { icon: "💼", text: "Nature of Business" },
    { icon: "👥", text: "Total Number of Employees" },
    { icon: "🏢", text: "GST Registration Date" },
    { icon: "⚖️", text: "Legal Status of Firm" },
    { icon: "📈", text: "Annual Turnover" },
    { icon: "🌐", text: "Import Export Code (IEC)" },
    { icon: "🧾", text: "GST No." },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Introduction & Profiles
        </h2>
        <p className="text-gray-600 mb-4 text-base md:text-lg">
          We are an ISO 9001:20015 certified entity engaged in Manufacturers,
          Wholesalers and Suppliers a qualitative assortment of Agriculture Bio
          Organic Products. These products are known for their 100% non-toxic
          and environment friendly.
        </p>
        <a
          href="#"
          className="text-orange-600 font-medium hover:underline inline-block mb-8"
        >
          Read More...
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-orange-500 text-2xl">{item.icon}</span>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded transition duration-300 cursor-pointer">
            Contact Us &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
