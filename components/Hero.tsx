"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import HeroImage from "../public/assets/Hero-Image.png";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/Hero-bg.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto py-16 md:grid grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 font-sans p-8"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left tracking-wide leading-tight text-gray-50">
            Build, Launch & Scale AI Products Faster
          </h1>

          <h2 className="text-xl text-center md:text-left tracking-wide text-gray-50 mt-2">
            AI-powered tools to automate workflows, boost productivity, and
            scale your business.
          </h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 mt-6 justify-center md:justify-start"
          >
            <Button variant="destructive">Get Started</Button>
            <Button variant="outline">Watch Demo</Button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:flex items-center justify-center py-4 px-6"
        >
          <Image
            className="rounded-xl object-contain"
            src={HeroImage}
            alt="Hero Image"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
