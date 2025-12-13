"use client";
import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartNoAxesCombined, Link, Sparkles } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="pt-20 px-4">
      <div className="max-w-7xl mx-auto px-10 md:px-14">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Why Choose AImate
        </motion.h1>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <motion.div variants={item} whileHover={{ scale: 1.04 }}>
            <Card className="flex flex-col justify-center items-center pt-0 lg:pt-6">
                <Image
                  className="flex justify-center items-center bg-accent rounded-lg" 
                  alt="Smart Workflow Engine"
                  src="/assets/Smart Workflow.png"
                  width={320}
                  height={320}
                />
              <CardHeader className="w-full">
                <CardTitle>Smart Workflow Engine</CardTitle>
                <CardDescription>
                  Automate repetitive tasks and complex business processes using
                  intelligent, customizable AI workflows. Free up your team's
                  time for high-value strategic work.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} whileHover={{ scale: 1.04 }}>
            <Card className="flex flex-col justify-center items-center pt-0 lg:pt-6">
              <Image
                  className="flex justify-center items-center bg-accent rounded-lg " 
                  alt="AI Insights"
                  src="/assets/AI Insights.png"
                  width={320}
                  height={320}
                />
              <CardHeader className="w-full">
                <CardTitle>Actionable AI Insights</CardTitle>
                <CardDescription>
                  Analyze massive datasets instantly to uncover hidden trends,
                  predict market shifts, and make confident, data-driven
                  decisions in real-time experience.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} whileHover={{ scale: 1.04 }}>
            <Card className="flex flex-col justify-center items-center pt-0 lg:pt-6">
              <Image
                  className="flex justify-center items-center bg-accent rounded-lg" 
                  alt="Smart Workflow Engine"
                  src="/assets/Smart Workflow.png"
                  width={320}
                  height={320}
                />
              <CardHeader className="w-full">
                <CardTitle>Connect Everything</CardTitle>
                <CardDescription>
                  Deploy AImate across your tech stack instantly. Connect with
                  over 50+ third-party tools, including HubSpot, Slack, and
                  Google Workspace, with zero friction.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
