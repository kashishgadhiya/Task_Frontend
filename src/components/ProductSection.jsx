import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sampleProducts = [
  { name: "Acetobacter", desc: "Top quality and eco-friendly" },
  { name: "NPK", desc: "Best nutrients for crops" },
  { name: "Azospirillum", desc: "Soil-friendly and effective" },
  { name: "Bacillus", desc: "High-yield product" },
  { name: "Potassium Mobilizer", desc: "Boosts plant metabolism" },
];

const ProductSection = ({ title, description }) => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
      </div>

   
   
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 bg-orange-50 p-4 rounded-xl shadow-sm border border-orange-100">
  <div className="text-left">
    <h3 className="text-lg sm:text-xl font-semibold text-orange-600 flex items-center gap-2">
      🌿 Explore More
    </h3>
    <p className="text-sm text-gray-600 mt-1">Get deeper insights and discover more products tailored for your field.</p>
  </div>

  <div className="flex flex-wrap gap-3">
    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full shadow transition duration-300 cursor-pointer">
      📖 <span>Read More</span>
    </button>
    <button className="flex items-center gap-2 border border-orange-400 text-orange-600 hover:bg-orange-100 px-5 py-2 rounded-full shadow-sm transition duration-300 cursor-pointer">
      🛒 <span>View More Products</span>
    </button>
  </div>
</div>


      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {sampleProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden text-center p-4 h-full transition">
              <img
                src="image.jpg"
                alt={product.name}
                className="w-full h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.desc}</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
                Get Inquiry
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSection;
