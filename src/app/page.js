import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Mapbox from "@/components/Mapbox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <About />
      <Reservation />
      <Mapbox />
      <Footer />
    </div>
  );
}
