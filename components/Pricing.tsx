"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, X } from "lucide-react";

// For Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Pricing = () => {
  return (
    <section className="pt-20 px-4 pb-5">
      <div className="max-w-7xl mx-auto px-10 md:px-14">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Subscription Plan
        </motion.h1>

        {/* Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8"
        >

          {/* Plan 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="w-full  ring-gray-600 ring-offset-4">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Starter</CardTitle>
                <CardDescription className="text-center mb-4">
                  (Individual)
                </CardDescription>
                <CardDescription className="text-3xl text-center text-destructive">
                  $19 / month
                </CardDescription>
                <CardDescription className="text-center mb-2">
                  Billed Annually
                </CardDescription>
                <Button variant="outline" className="rounded-full">
                  Get AImate Starter
                </Button>

                {/* Features */}
                <CardContent className="mt-4">
                  <div className="font-semibold text-sm mb-4">
                    Start 7-Day Free Trial
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />1 User Seat
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Core Automation Workflows
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    5,000 AI Credits/mo
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <X color="red" />
                    Real-time Insights
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <X color="red" />
                    Premium Integrations
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <X color="red" />
                    Priority Support
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Card className="w-full ring-2 ring-destructive ring-offset-4">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Professional
                </CardTitle>
                <CardDescription className="text-center mb-4">
                  (Recommended)
                </CardDescription>
                <CardDescription className="text-3xl text-center text-destructive">
                  $49 / month
                </CardDescription>
                <CardDescription className="text-center mb-2">
                  Billed Annually
                </CardDescription>
                <Button variant="destructive" className="rounded-full">
                  Get AImate Professional
                </Button>

                {/* Features */}
                <CardContent className="mt-4">
                  <div className="font-semibold text-sm mb-4">
                    Start 14-Day Free Trial
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />5 User Seat
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Advanced Workflow Engine
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    30,000 AI Credits/mo
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Real-time Insights
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Premium Integrations
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <X color="red" />
                    Priority Support
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="w-full  ring-green-600 ring-offset-4">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-center mb-4">
                  (Business)
                </CardDescription>
                <CardDescription className="text-3xl text-center text-green-600">
                  Contact Sales
                </CardDescription>
                <CardDescription className="text-center mb-2">
                  Custom Quoting
                </CardDescription>
                <Button variant="secondary" className="rounded-full">
                  Get AImate Enterprise
                </Button>

                {/* Features */}
                <CardContent className="mt-4">
                  <div className="font-semibold text-sm mb-4">
                    Start 7-Day Free Trial
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Unlimited Seats
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Advanced Workflow Engine
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Custom Credit Pool
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Real-time Insights
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    Dedicated Account Manager
                  </div>
                  <div className="flex items-center text-sm gap-2 mb-2">
                    <Check color="green" />
                    24/7 Priority Support
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
