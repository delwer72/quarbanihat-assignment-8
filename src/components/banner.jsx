


"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import bannerBg from "../assets/cow-banner.png";
import "animate.css";

const Banner = () => {
  return (
    <div
      className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl container mx-auto"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          {/* Title Animation */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl animate__animated animate__fadeInDown">
            Find Healthy Qurbani Animals Online
          </h1>

          {/* Paragraph Animation */}
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
            Browse, compare, and book your sacrificial animals easily from trusted sellers in your area.
          </p>

          {/* Buttons Animation */}
          <div className="flex gap-4 flex-wrap animate__animated animate__zoomIn animate__delay-2s">

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