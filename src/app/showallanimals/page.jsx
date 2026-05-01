import AnimalCard from "@/components/Home/AnimalCard";

const ShowAllAnimals = async () => {
  const res = await fetch("https://a-8-quarbanihat.vercel.app/data.json");
  const animals = await res.json();

  // const topAnimals = animals.slice(0, 6); 

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">All Animals</h1>

      <div className="grid grid-cols-3 gap-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllAnimals;
