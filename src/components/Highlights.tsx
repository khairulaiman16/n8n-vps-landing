import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";
import { AiOutlineCloud, AiOutlineLock, AiOutlineRocket, AiOutlineNodeIndex } from "react-icons/ai";

const items = [
  {
    Icon: AiOutlineCloud,
    title: "Performance that scales",
    desc: "Dedicated resources tuned for consistent, fast workflow execution."
  },
  {
    Icon: AiOutlineLock,
    title: "Your data, your control",
    desc: "Manage access, backups, and security policies under your own rules."
  },
  {
    Icon: AiOutlineRocket,
    title: "Pre-installed & ready",
    desc: "n8n comes pre-installed, Docker-ready, and configured for immediate use."
  },
  {
    Icon: AiOutlineNodeIndex,
    title: "Connect anything",
    desc: "Integrate APIs, SaaS apps, and custom services with minimal setup."
  }
];

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold">Engineered for confident automation</h3>
          <p className="text-slate-600 mt-2">Everything you need to run production-grade automations under your control.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((it, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              className="card p-6 hover:shadow-md transition cursor-default"
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                <it.Icon className="text-indigo-600" size={20} />
              </div>
              <h4 className="font-semibold mb-2">{it.title}</h4>
              <p className="text-sm text-slate-600">{it.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
