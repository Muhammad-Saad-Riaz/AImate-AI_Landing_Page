"use client"
import { ArrowBigDownDash, Loader, Upload } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay:any) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section className="pt-20 px-4 pb-5">
      <div className="max-w-7xl mx-auto px-10 md:px-14">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10">How It Works</h1>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* Animated horizontal dotted line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block origin-left absolute top-1/2 left-0 w-full border-t-2 border-dashed border-primary-accent"
          />

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">

            {/* Step 1 */}
            <motion.div
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="flex flex-col gap-2 items-center bg-accent p-6 rounded-lg md:w-1/3"
            >
              <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent p-6 mx-6 rounded-full">
                <Upload />
              </div>
              <h2 className="font-semibold">Upload Data</h2>
              <p className="text-muted-foreground text-sm text-center">
                Connect your data sources securely.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col gap-2 items-center bg-accent p-6 rounded-lg md:w-1/3"
            >
              <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent p-6 mx-6 rounded-full">
                <Loader />
              </div>
              <h2 className="font-semibold">AI Processes</h2>
              <p className="text-muted-foreground text-sm text-center">
                The Smart Engine analyzes, structures, and refines the data.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-col gap-2 items-center bg-accent p-6 rounded-lg md:w-1/3"
            >
              <div className="flex justify-center items-center border-2 bg-primary-foreground border-accent p-6 mx-6 rounded-full">
                <ArrowBigDownDash />
              </div>
              <h2 className="font-semibold">Get Results</h2>
              <p className="text-muted-foreground text-sm text-center">
                Receive instant, actionable insights and automated outcomes.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
