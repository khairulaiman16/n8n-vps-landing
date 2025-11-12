import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const Pricing: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Simple Pricing, Powerful Automation
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-10 max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">n8n VPS Starter</h3>
          <p className="text-gray-600 mb-6">Perfect for small to medium workflows</p>
          <div className="text-4xl font-bold mb-6">
            $15 <span className="text-lg font-normal text-gray-500">/mo</span>
          </div>
          <ul className="text-gray-600 mb-8 space-y-2">
            <li>✅ 2 vCPU</li>
            <li>✅ 4GB RAM</li>
            <li>✅ 50GB SSD</li>
            <li>✅ Full Root Access</li>
          </ul>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
