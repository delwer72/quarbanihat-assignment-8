
"use client";

import "animate.css";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12 animate__animated animate__fadeInDown container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Our Qurbani Hat?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We provide healthy, farm-raised animals with trusted service and
            transparent pricing for your Qurbani needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center animate__animated animate__fadeInUp animate__delay-1s hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Healthy Animals
            </h3>
            <p className="text-gray-600">
              All animals are raised in natural environments with proper care and
              nutrition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center animate__animated animate__fadeInUp animate__delay-2s hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Fair Pricing
            </h3>
            <p className="text-gray-600">
              Transparent and competitive pricing to ensure the best value for
              buyers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center animate__animated animate__fadeInUp animate__delay-3s hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Trusted Service
            </h3>
            <p className="text-gray-600">
              Reliable booking, easy purchase process, and customer-first support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;