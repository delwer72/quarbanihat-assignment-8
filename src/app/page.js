import Image from "next/image";
import Banner from "@/components/banner";
import AllAnimals from "@/components/Home/AllAnimals";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
        
        <AllAnimals/>

    </div>
  );
}
