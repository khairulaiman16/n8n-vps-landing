import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold mb-4">Own your automation stack</h3>
          <p className="text-slate-600 mb-6">Deploy your dedicated n8n VPS and start building reliable workflows under your own control.</p>
          <a href="#flow" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-[1.02] transition">Launch your n8n VPS</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
