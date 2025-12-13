
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
    </div>
  );
}
