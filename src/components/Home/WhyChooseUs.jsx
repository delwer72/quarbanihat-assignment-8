const WhyChooseUs = () => {
  return (
   <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">
        Why Choose Our Qurbani Hat?
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We provide healthy, farm-raised animals with trusted service and
        transparent pricing for your Qurbani needs.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center">
        <h3 className="text-2xl font-semibold text-green-600 mb-3">
          Healthy Animals
        </h3>
        <p className="text-gray-600">
          All animals are raised in natural environments with proper care and
          nutrition.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center">
        <h3 className="text-2xl font-semibold text-green-600 mb-3">
          Fair Pricing
        </h3>
        <p className="text-gray-600">
          Transparent and competitive pricing to ensure the best value for
          buyers.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center">
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