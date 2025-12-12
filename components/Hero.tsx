import { section } from "framer-motion/client";
import { Button } from "./ui/button";
import Image from "next/image";
import HeroImage from "../public/assets/Hero-Image.png"



const Hero = () => {
  return (
    <section className="bg-[url('/assets/Hero-bg.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto py-16 md:grid grid-cols-2 items-center">
        <div className="flex flex-col gap-2 font-sans p-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left tracking-wide leading-15 text-gray-50">
            Build, Launch & Scale AI Products Faster
          </h1>
          <h2 className="text-xl md:text-xl text-center md:text-left tracking-wide text-gray-50">
            AI-powered tools to automate workflows, boost productivity, and
            scale your business.
          </h2>
          <div className="flex gap-4 mt-6 justify-center md:justify-normal">
            <Button variant={"destructive"}>Get Started</Button>
            <Button variant={"outline"}>Watch Demo</Button>
          </div>
        </div>
        {/* This is the second column of your md:grid grid-cols-2 layout */}
        <div className="hidden md:flex items-center justify-center py-4 px-6">
            <Image
              className="overflow-hidden rounded-xl object-contain h-100 flex items-center justify-center"
              src={HeroImage}
              alt="Hero Image"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
