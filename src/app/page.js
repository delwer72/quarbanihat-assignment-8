import Image from "next/image";
import Banner from "@/components/banner";
import AllAnimals from "@/components/Home/AllAnimals";

export default function Home() {
  return (
    <div>
      <Banner />
        
        <AllAnimals/>

    </div>
  );
}
