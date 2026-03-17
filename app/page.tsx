import Image from "next/image";

import Navbar from "@/components/navbar";
import LandingHero from "@/pages/landingHero"
import WhyChooseUs from "@/components/whyChooseUs"


import Homepage from "../pages/landingPage"
export default function Home() {
  return (
    <div>

      <LandingHero/>
      <WhyChooseUs/>
      {/* <Homepage/> */}
    </div>
  );
}
