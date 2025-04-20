import React from "react";
import ProductSection from "../components/ProductSection";

const sections = [
  { title: "Biological Products", description: "We are an ISO 9001:20015 certified entity engaged in Manufacturers, Wholesalers and Suppliers a qualitative assortment of Agriculture Bio Organic Products. These products are known for their 100% non-toxic and environment friendly." },
  { title: "PGRs", description: "These products are known for their 100% non-toxic and environment friendly." },
  { title: "Pesticides", description: "We ensure only eco-safe and effective protection solutions." },
  { title: "Flowering Stimulant", description: "Stimulates growth and blooming while being organic." },
  { title: "Silicon", description: "Strengthens plant tissue and boosts immunity." },
  { title: "Hydro Gel", description: "Helps retain soil moisture and improves crop resilience." },
  { title: "Organic & Herbal Products", description: "Eco-safe organic products for sustainable farming." },
  { title: "Fertilizers", description: "Balanced nutrient supply for crop health and yield." },
  { title: "Aqua Science", description: "Special formulations for aquatic crop environments." },
  { title: "Gardenica", description: "Solutions tailored for urban gardening and home plants." },
  { title: "Other", description: "Explore our wide variety of miscellaneous agriculture products." }
];

const ProductPage = () => {
  return (
    <div>
      {sections.map((sec, idx) => (
        <ProductSection
          key={idx}
          title={sec.title}
          description={sec.description}
        />
      ))}
    </div>
  );
};

export default ProductPage;
