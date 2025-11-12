import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const FlowSteps: React.FC = () => {
  const steps = [
    { title: "Deploy VPS", desc: "We provision and install n8n so you don’t need to manage setup." },
    { title: "Secure & Connect", desc: "Add SSL, point your domain, and connect apps securely." },
    { title: "Automate", desc: "Build workflows, trigger tasks, and keep everything under your control." }
  ];

  return (
    <section id="flow" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">How it works — in three moments</h3>
          <p className="text-slate-600 mt-2">A simple flow to get you automating fast.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12 }}
              className="p-6 rounded-xl bg-white shadow-sm text-center"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-50 mx-auto flex items-center justify-center text-indigo-600 font-semibold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSteps;
