// import React from "react";
import { FaProjectDiagram} from "react-icons/fa";
import pipelineImage from "../assets/pipeline.jpeg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Future of Manufacturing <br /> with {" "}
          <span className="text-green-900">Latest Technology</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-green-900 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-800 transition">
            Get Started
          </button>
          <button className="bg-white border border-gray-300 py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
            Try Demo
          </button>
        </div>

        {/* Ratings */}
        <div className="flex justify-center items-center gap-2 text-gray-500 mb-12">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-sm"> 5.0 from <strong> 80+ reviews</strong> </span>
        </div>


        

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-10 items-end grid-flow-row">
          {/* Card 1 */}
          <div className="h-[360px] w-[260px]">
            <img
              src={pipelineImage}
              alt="Pipes"
              className="rounded-lg shadow-md w-full h-full object-cover"
            /> 
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[240px] w-[200px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-500 text-center">
              Our Esteemed Clients and Partners
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 rounded-lg shadow-md p-6 flex flex-col justify-between items-left min-h-[240px] w-[280px] text-left">
            <FaProjectDiagram className="text-green-600 text-4xl mb-2" />
            <p className="text-gray-500">Total Projects 8%</p>
            <div className="text-green-600 text-4xl font-bold">1951+</div>
            <p className="text-gray-400 text-sm">
              Increase of <span className="text-green-400">126</span> this month
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-green-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[240px] w-[200px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">6+</h3>
            <p className="text-gray-500 text-center">Years of Dedicated Service</p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center h-[360px] w-[260px]">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Achieve Optimal Efficiency and Boost Productivity
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Innovative solutions for all your manufacturing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
