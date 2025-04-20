import React from "react";

const products = [
  {
    title: "Amino Gold - Bio Stimulant",
    text: "Boosts yield naturally with eco-safe ingredients.",
    image: "main.jpg",
  },
  {
    title: "Advanced Crop Enhancer",
    text: "Strengthens root growth and leaf quality.",
    image: "main.jpg",
  },
  {
    title: "Liquid Fertilizer Concentrate",
    text: "Organic solution for healthy soil & crops.",
    image: "main.jpg",
  },
];

const sideCards = [
  {
    text: "Text for the top image.",
    image: "main.jpg",
  },
  {
    text: "Text for the bottom image.",
    image: "main.jpg",
  },
];
const ProductCard = ({ title, text, image }) => (
  <div className="relative rounded-3xl overflow-hidden group shadow-lg transition bg-white cursor-pointer">
    <img
      src={image}
      alt={title}
      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm">{text}</p>

      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-xs rounded-full">
          Get Quote
        </button>
      </div>
    </div>
  </div>
);

const SideCard = ({ text, image }) => (
  <div className="relative rounded-3xl overflow-hidden group shadow-md transition cursor-pointer">
    <img
      src={image}
      alt={text}
      className="w-full h-40 object-cover transition duration-300 group-hover:brightness-75"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-2 text-white text-sm font-medium text-center">
      <p>{text}</p>

      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 text-xs rounded-full">
          Get Quote
        </button>
      </div>
    </div>
  </div>
);

const ProductsGallery = () => (
  <section
    className="p-5 bg-gradient-to-br from-lime-50 to-green-100 min-h-[80vh] flex items-center justify-center
  "
  >
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {sideCards.map((card, index) => (
          <SideCard key={index} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsGallery;
