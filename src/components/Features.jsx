import React from "react";
// import { Features } from "tailwindcss";

const services = [
  {
    title: "Production and Assembly",
    description: "Details on production processes, assembly, capacity, and product types.",
    icon: "", 
  },
  {
    title: "Custom Manufacturing",
    description: "Custom product creation with design and customization options.",
    icon: "",
  },
  {
    title: "Quality Control",
    description: "Procedures and systems in place to ensure high product quality.",
    icon: "", 
  },
  {
    title: "Technology and Innovation",
    description: "Details on the latest manufacturing technologies and ongoing innovations.",
    icon: "", 
  },
  {
    title: "Packaging and Logistics",
    description: "Packaging and logistics for shipping to customers and distributors.",
    icon: "", 
  },
  {
    title: "Consulting Market Research",
    description: "Services to help companies understand market needs and provide strategic advice.",
    icon: "", 
  },
];

const Feature = () => {
  return (
    <div style={{ backgroundColor: '#073B3A' }} className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Efficient and Integrated Manufacturing Services
        </h1>
        <p className="text-gray-300 text-lg mb-12">
          Simplify operations with our efficient, quality-focused services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;