import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between px-6 py-4 text-sm">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-10 h-10 cursor-pointer"
          />
          <div>
            <h1 className="font-bold text-lg text-gray-800 cursor-pointer">
              Unicorp Biochem
            </h1>
            <p className="text-gray-500">Vemali, Vadodara, Gujarat</p>
            <p className="text-green-600 font-medium">
              GST No. 24AAFFU6297A1Z6 ✅
            </p>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <div className="border border-red-500 px-4 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-50 transition cursor-pointer">
            📞 Call: 08047646536
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">
            ✉️ Send Email
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-500 cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <nav className="bg-orange-500 text-white">
        <div className="container mx-auto px-6 py-3">
          <div className="hidden md:flex justify-between items-center">
            <div className="flex space-x-6 text-base font-medium">
              <Link to="/" className="cursor-pointer hover:underline">
                Home
              </Link>
              <Link to="/products" className="cursor-pointer hover:underline">
                Our Products
              </Link>
              <Link to="/about" className="cursor-pointer hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="cursor-pointer hover:underline">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="group flex items-center bg-white/90 backdrop-blur-md border border-white/40 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-500 w-48 focus-within:w-72">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-5 py-2 w-full bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
                />
                <button className="  text-orange-600 px-4 h-full rounded-l-none rounded-r-full cursor-pointer">
                  Search
                </button>
              </div>
              <button className=" text-white px-4 h-full rounded-l-none rounded-r-full cursor-pointer hover:underline">
                Contact Supplier
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="flex flex-col mt-4 space-y-4 text-base font-medium md:hidden">
              <Link to="/" className="cursor-pointer hover:underline">
                Home
              </Link>
              <Link to="/products" className="cursor-pointer hover:underline">
                Our Products
              </Link>
              <Link to="/about" className="cursor-pointer hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="cursor-pointer hover:underline">
                Contact Us
              </Link>

              <div className="w-full flex items-center">
                <div className="group flex items-center bg-white/90 backdrop-blur-md border border-white/40 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-500 w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-5 py-2 w-full bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
                  />
                  <button className="  text-orange-600 px-4 h-full rounded-l-none rounded-r-full cursor-pointer">
                    Search
                  </button>
                </div>
              </div>

              <div className="border border-red-500 px-4 py-2 rounded-lg text-red-600 font-semibold hover:bg-red-50 transition cursor-pointer">
                📞 Call: 08047646536
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">
                ✉️ Send Email
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
