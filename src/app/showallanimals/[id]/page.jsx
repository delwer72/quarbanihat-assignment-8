

const DetailsPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://a-8-quarbanihat.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const Animal = data.find((d) => d.id == id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image
        <img
          src={Animal?.image}
          alt={Animal?.name}
          className="w-full h-80 object-cover"
        /> */}

        <div className="p-8 space-y-5">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {Animal?.name}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center">
            {Animal?.description}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-10 text-sm border-t border-b py-5">

            <p><span className="font-semibold">Type:</span> {Animal?.type}</p>
            <p><span className="font-semibold">Breed:</span> {Animal?.breed}</p>
            <p><span className="font-semibold">Age:</span> {Animal?.age} years</p>
            <p><span className="font-semibold">Weight:</span> {Animal?.weight} kg</p>
            <p><span className="font-semibold">Location:</span> {Animal?.location}</p>
            <p><span className="font-semibold">Category:</span> {Animal?.category}</p>

          </div>

          {/* Price */}
          <div className="text-center">
            <span className="text-3xl font-bold text-green-600">
             Price : ৳ {Animal?.price}
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
