import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 sm:px-10 lg:px-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Get in Touch
      </h2>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <form className="flex flex-col space-y-6">
          <label className="text-sm font-medium text-gray-200">
            Describe your requirement in detail
            <textarea
              rows="6"
              placeholder="Type here..."
              className="mt-2 w-full rounded-md p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </label>

          <button
            type="submit"
            className="self-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
