
import { Button } from "@heroui/react";
import Link from "next/link";
 import bannerBg from "../assets/cow-banner.png";

const Banner = () => {
  return (
    <div
         className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Healthy Qurbani Animals Online
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Browse, compare, and book your sacrificial animals easily from trusted sellers in your area.
          </p>

          <div className="flex gap-4 flex-wrap">

            <Link href="/animals">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Browse Animals
              </Button>
            </Link>

            <Link href="/sell">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Sell Your Animal
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white border-white">
                View Pricing
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;