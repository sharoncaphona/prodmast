// import React from "react";

// Import icons from React Icons
import { FaStarOfLife } from "react-icons/fa";
import { MdOutlineArrowOutward, MdOutlineLayers } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { BsBox } from "react-icons/bs";
import { LuShieldHalf } from "react-icons/lu";
import { TiSpannerOutline } from "react-icons/ti";

const services = [
  {
    title: "Production and Assembly",
    description: "Details on production processes, assembly, capacity, and product types.",
    leftIcon: <FaStarOfLife />,
    rightIcon: <MdOutlineArrowOutward />,
  },
  {
    title: "Custom Manufacturing",
    description: "Custom product creation with design and customization options.",
    leftIcon: <MdOutlineLayers />,
    rightIcon: <MdOutlineArrowOutward />,
  },
  {
    title: "Quality Control",
    description: "Procedures and systems in place to ensure high product quality.",
    leftIcon: <TiSpannerOutline />,
    rightIcon: <MdOutlineArrowOutward />,
  },
  {
    title: "Technology and Innovation",
    description: "Details on the latest manufacturing technologies and ongoing innovations.",
    leftIcon: <LuShieldHalf />,
    rightIcon: <MdOutlineArrowOutward />,
  },
  {
    title: "Packaging and Logistics",
    description: "Packaging and logistics for shipping to customers and distributors.",
    leftIcon: <BsBox />,
    rightIcon: <MdOutlineArrowOutward />,
  },
  {
    title: "Consulting Market Research",
    description: "Services to help companies understand market needs and provide strategic advice.",
    leftIcon: <VscGraphLine />,
    rightIcon: <MdOutlineArrowOutward />,
  },
];

const Feature = () => {
  return (
    <div style={{ backgroundColor: "#073B3A" }} className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Efficient and Integrated 
          <br/>
          Manufacturing Services
        </h1>
        <p className="text-gray-300 text-lg mb-12">
          Simplify operations with our efficient, quality-focused services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
            key={index}
            style={{ backgroundColor: "#073B3A" }}
            className="relative rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-green-500 h-[200px] flex flex-col justify-center items-center"
          >
            <div className="absolute top-4 left-4 text-white text-xl">
              {service.leftIcon}
            </div>
            <div className="absolute top-4 right-4 text-white text-xl">
              {service.rightIcon}
            </div>
          
            {/* Content */}
            <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>
            <p className="text-white text-center">{service.description}</p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
