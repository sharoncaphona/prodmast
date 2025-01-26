import React from "react";
// import PipelineImage from "../assets/pipeline.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The Future of Manufacturing <br /> with{" "}
          <span className="text-green-600">Latest Technology</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800">
            Get Started
          </button>
          <button className="bg-white border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-100">
            Try Demo
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 text-gray-500 mb-12">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-sm">
            5.0 from <strong>80+ reviews</strong>
          </span>
        </div>

        {/* Grid Start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 h-72 flex flex-col items-center">
            <img src="" alt="Pipes" className="rounded-md mb-4 w-20 h-20 object-cover"/>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-500 text-center">
              Our Esteemed Clients and Partners
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-lg shadow-md p-6 h-64">
            <div className="flex items-center justify-between">
              <div className="text-green-600 text-4xl font-bold">1951+</div>
              <div className="bg-green-100 text-green-500 text-sm px-2 py-1 rounded">
                +8%
              </div>
            </div>
            <p className="text-gray-500 mt-2">Total Projects</p>
            <p className="text-gray-400 text-sm mt-2">
              Increase of 126 this month
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-100 rounded-lg shadow-md p-6 h-60 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">6+</h3>
            <p className="text-gray-500 text-center">
              Years of Dedicated Service
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 h-80 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Achieve Optimal Efficiency and Boost Productivity
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Innovative solutions for all your manufacturing needs.
              </p>
            </div>
          </div>

        </div>
        {/* Grid End */}
        
      </div>
    </div>
  );
};

export default HeroSection;
