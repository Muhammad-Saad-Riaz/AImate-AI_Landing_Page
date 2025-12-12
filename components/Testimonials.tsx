"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "./ui/card";
import { CircleUserRound } from "lucide-react";
import { MotionConfig } from "framer-motion";

// To counnt current review number
const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="pt-20 px-4 pb-15 bg-accent">
      <div className="max-w-7xl mx-auto px-10 md:px-14 flex flex-col justify-center items-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          What Our Users Say
        </motion.h1>

        {/* Carosule */}
        <Carousel
          className="flex justify-center w-[50vw]"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-4 -mr-4">

            {/* Review 1 */}
            <CarouselItem>
              <Card className="flex justify-items-center w-[50vw] p-8">
                <div className="flex justify-items-center">
                  <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent ml-2 md:ml-6 rounded-full">
                    <CircleUserRound size={40} />
                  </div>
                  <h2 className="font-semibold flex items-center text-2xl ml-3">
                    Sarah K.
                  </h2>
                </div>
                <p className="italic text-lg tracking-wide">
                  "The seamless integrations with our existing stack were
                  game-changing. Setup took less than an hour, and the results
                  were immediate."
                </p>
              </Card>
            </CarouselItem>

            {/* Review 2 */}
            <CarouselItem>
              <Card className="flex justify-items-center w-[50vw] p-8">
                <div className="flex justify-items-center">
                  <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent ml-2 md:ml-6 rounded-full">
                    <CircleUserRound size={40} />
                  </div>
                  <h2 className="font-semibold flex items-center text-2xl ml-3">
                    Alex R.
                  </h2>
                </div>
                <p className="italic text-lg tracking-wide">
                  "AImate cut our data processing time from 4 hours to 4
                  minutes. It's not just a tool; it's a massive competitive
                  advantage."
                </p>
              </Card>
            </CarouselItem>

            {/* Review 3 */}
            <CarouselItem>
              <Card className="flex justify-items-center w-[50vw] p-8">
                <div className="flex justify-items-center">
                  <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent ml-2 md:ml-6 rounded-full">
                    <CircleUserRound size={40} />
                  </div>
                  <h2 className="font-semibold flex items-center text-2xl ml-3">
                    Mark L.
                  </h2>
                </div>
                <p className="italic text-lg tracking-wide">
                  "The most intuitive AI automation platform we've ever used.
                  The drag-and-drop workflows are incredibly powerful yet simple
                  to manage."
                </p>
              </Card>
            </CarouselItem>
          </CarouselContent>

          {/* Previous and next button */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* displaying current review number */}
        <div className="text-muted-foreground py-2 text-center text-sm">
          Review {current} of {count}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
