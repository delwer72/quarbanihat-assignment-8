import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa6";
import { GiWeight } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";

const AnimalCard = ({ animal }) => {
  return (
    <Card className="border rounded-xl p-3">
      {/* Image Section */}
      <div className="relative w-full aspect-square">
        <Image
          src={animal.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={animal.name}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {animal.type}
        </Chip>
      </div>

      {/* Title */}
      <div className="mt-2">
        <h2 className="font-medium text-lg">{animal.name}</h2>
        <p className="text-sm text-gray-500">{animal.breed}</p>
      </div>

      {/* Info */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <FaDollarSign />
          <p>৳{animal.price}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-1">
          <GiWeight />
          <p>{animal.weight} kg</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-1">
          <FaBirthdayCake />
          <p>{animal.age} yrs</p>
        </div>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-500 mt-2">
        📍 {animal.location}
      </p>

      {/* Button */}
      <Link href={`/all-animals/${animal.id}`}>
        <Button variant="outline" className="w-full mt-3">
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default AnimalCard;