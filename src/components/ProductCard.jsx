import React from 'react';
const products = [
    {
      title: 'Biological Products',
      items: ['Acetobacter', 'Nitrogen Phosphorus Potassium', 'Azospirillum'],
      image: 'image.jpg',
    },
    {
      title: 'PGRs',
      items: ['Organic Bentonite Granule', 'Seaweed Extract Powder Formulation', 'Seaweed Zyme Liquid Formulation'],
      image: 'image1.jpg',
    },
    {
      title: 'Pesticides',
      items: ['Chlorantraniliprole 18.5% SC', 'Buprofezin 25% SC', 'Bifenthrin 10% EC w/w'],
      image: 'image.jpg',
    },
    {
      title: 'Flowering Stimulant',
      items: ['Vegetable Special – Liquid Formulation', 'Advanced PGR Combination', 'Hormone Powder Formulation'],
      image: 'image1.jpg',
    },
    {
      title: 'Silicon',
      items: ['Silicon surfactant 95%', 'Trisiloxane 45%', 'Non-Ionic surfactant 80%'],
      image: 'image.jpg',
    },
    {
      title: 'Hydro Gel',
      items: ['Super absorbent polymer', 'Hydro'],
      image: 'image1.jpg',
    },
  ];
  
  

const ProductCard = ({ title, items, image }) => (
  <div className="rounded-2xl shadow-lg hover:shadow-2xl transition p-4 bg-white">
    <div className="h-40 w-full overflow-hidden rounded-xl mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md w-full">Get Quote</button>
  </div>
);

const ProductsGrid = () => (
  <section className="py-10 px-4 md:px-10 bg-gray-50 min-h-screen">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </section>
);

export default ProductsGrid;
