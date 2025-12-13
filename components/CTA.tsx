"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto px-10 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 md:px-20 text-center"
        >
          {/* Decorative Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent" />

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="h-7 w-7" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Supercharge Your Workflow?
          </h2>

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-muted-foreground mb-10 text-lg">
            Join thousands of teams using <span className="font-medium text-foreground">AImate</span> to automate tasks,
            uncover insights, and scale faster — all powered by AI.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg" className="rounded-full px-8">
              Book a Demo
            </Button>
          </div>

          {/* Trust / Urgency Text */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
