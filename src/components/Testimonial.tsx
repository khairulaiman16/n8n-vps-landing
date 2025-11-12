import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionVariants";

const Testimonial: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.figure initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <blockquote className="text-xl md:text-2xl font-semibold text-slate-900 text-center"> 
            “Running n8n on our own VPS gave us better performance and complete control over our automations.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-slate-600 text-center">— Farah, Automation Lead</figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Testimonial;
