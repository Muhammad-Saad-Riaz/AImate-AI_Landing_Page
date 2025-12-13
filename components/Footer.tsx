"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary-foreground">
      <div className="max-w-7xl mx-auto px-10 md:px-14 py-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AImate</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered automation platform helping teams work smarter, faster,
              and at scale.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground">Integrations</Link></li>
              <li><Link href="#" className="hover:text-foreground">Changelog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">About</Link></li>
              <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground">Security</Link></li>
              <li><Link href="#" className="hover:text-foreground">Compliance</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AImate. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
