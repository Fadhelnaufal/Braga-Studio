import Hero from "@/app/components/Hero";
import GetKnow from "@/app/GetKnow/Page";
import Services from "@/app/OurService/Page";
import Image from "next/image";
import GreatValues from "./GreatValues/page";
import Banner from "./components/Banner";
import Process from "./components/Process";

export default function Home() {
  return (
    <>
      <div className="font-manrope">
        <Hero />
        <GetKnow />
        <Services />
        <GreatValues />
        <Process />
        <Banner />
      </div>
    </>
  );
}
