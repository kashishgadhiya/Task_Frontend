import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">UNI</h3>
          <p className="mb-2"><span className="font-medium">Contact Person:</span> Govind (Partner)</p>
          <p className="mb-2"><span className="font-medium">Address:</span> sdfasdfasf</p>
          <p className="mb-4"><span className="font-medium">Call Us:</span> 234</p>
          <div className="flex gap-4">
            <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded transition duration-300 cursor-pointer">
              📱 Send SMS
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition duration-300 cursor-pointer">
              ✉️ Send Email
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company Profile</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Introduction & Profiles</a></li>
            <li><a href="#" className="hover:text-orange-400">Our Products</a></li>
            <li><a href="#" className="hover:text-orange-400">Corporate Video</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Products & Services</h3>
          <ul className="space-y-2">
            <li>Pesticides</li>
            <li>Plant Growth Promoters</li>
            <li>Bio Fertilizer</li>
            <li>Bio Pesticides</li>
            <li>Gardenica - Urban Gardening Products</li>
            <li>Organic Pesticide</li>
            <li>Agriculture Fungicide</li>
            <li>Organic Fertilizer</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Corporate Video</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.youtube.com/embed/4xTM8m4dIiQ"
              title="Unicrop Bio Chem"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} UNI. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-orange-400 text-xl">🔗</a>
          <a href="#" className="hover:text-orange-400 text-xl">🔵</a>
          <a href="#" className="hover:text-orange-400 text-xl">💼</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
