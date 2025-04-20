import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 py-10 sm:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <img
            src="https://bulkagrochem.ca/assets/images/album/17446083441739794842unitednutrions3pngpng.png"
            alt="Company Logo"
            className="w-32 sm:w-40 mb-4"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 text-center">
            About Bulkagrochem
          </h1>
          <p className="mt-4 text-center max-w-3xl text-lg text-gray-600">
            Bulkagrochem is an innovative leader in sustainable agriculture
            solutions. We offer high-quality products, empowering farmers and
            supporting eco-friendly farming practices through bio-stimulants,
            fertilizers, and plant growth solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Bulkagrochem */}
          <div className="bg-green-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 mb-4">
              We have appointed a talented group of professionals who work closely with our clients to understand their needs and deliver customized solutions. Our team is always ready to ensure the highest standards of service, and we maintain constant communication with our clients to cater to their exact requirements. 
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Engineers</li>
              <li>Quality Analysts</li>
              <li>Technicians</li>
              <li>Skilled and Semi-Skilled Workforce</li>
              <li>Sales and Marketing Executives</li>
            </ul>
          </div>

          {/* Company Overview */}
          <div className="bg-orange-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-orange-700 mb-4">
              Company Overview
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Nature of Business:</strong> Bulk Importer, Manufacturer, Trader, Bulk Supplier, and Marketing
              </p>
              <p>
                <strong>CEO:</strong> Govind
              </p>
              <p>
                <strong>Registered Address:</strong> sdfasdfasf
              </p>
              <p>
                <strong>Annual Turnover:</strong> Not Specified
              </p>
            </div>
          </div>

          {/* Product Range */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Our Product Range
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Acetobacter Powder</li>
              <li>Amino Acid Powder</li>
              <li>Azotobacter Powder</li>
              <li>Humic Acid (Liquid & Powder)</li>
              <li>Seaweed Extract Powder</li>
              <li>Trichoderma Powder</li>
            </ul>
          </div>

          {/* Global Expansion */}
          <div className="bg-yellow-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">
              Global Expansion
            </h2>
            <p className="text-gray-700">
              With the support of our excellent management team, we have expanded our reach across India and are now making strides in the international market. We offer the best price and unparalleled customer support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* GST Partners */}
          <div className="bg-red-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              GST Partners
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Prakashbhai Dhirubhai Vaghasiya</li>
              <li>Vijaybhai Dhirubhai Vaghasiya</li>
              <li>Vipulbhai Babubhai Radadiya</li>
            </ul>
          </div>

          {/* Statutory Profile */}
          <div className="bg-purple-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Statutory Profile
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Banker:</strong> vxcbcvbxcv
              </p>
              <p>
                <strong>GST No.:</strong> Not Specified
              </p>
            </div>
          </div>
        </div>

        {/* Payment & Shipment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-teal-50 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">
              Payment & Shipment Details
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Cash</li>
              <li>Pay Order</li>
              <li>Bank Transfer</li>
              <li>Online</li>
              <li>RTGS</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Empowering Farmers, Growing Sustainably 🌿
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
