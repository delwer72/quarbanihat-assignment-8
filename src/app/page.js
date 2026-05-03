import Image from "next/image";
import Banner from "@/components/banner";
import AllAnimals from "@/components/Home/AllAnimals";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className = "container mx-auto">
      <Banner />
      <WhyChooseUs />
        
        <AllAnimals/>

    </div>
  );
}
