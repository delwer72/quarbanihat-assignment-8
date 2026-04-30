import React from "react";



const AllAnimals = async () => {
  const res = await fetch("https://a-8-quarbanihat.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Animals</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((animal) => (
          <div
            key={animal.id}
            className="border rounded-2xl shadow-md p-4 bg-white"
          >
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-52 object-cover rounded-xl"
            />

            <h2 className="text-xl font-semibold mt-4">{animal.name}</h2>
            <p className="text-gray-600">{animal.breed}</p>

            <div className="mt-3 space-y-1 text-sm text-gray-700">
              <p><strong>Type:</strong> {animal.type}</p>
              <p><strong>Price:</strong> ৳{animal.price}</p>
              <p><strong>Weight:</strong> {animal.weight} kg</p>
              <p><strong>Age:</strong> {animal.age} years</p>
              <p><strong>Location:</strong> {animal.location}</p>
            </div>

            <p className="mt-3 text-gray-500 text-sm">
              {animal.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
